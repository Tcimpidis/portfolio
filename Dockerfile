FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
ARG NEXT_PUBLIC_NODE_ENV
ARG RESEND_API_KEY
ARG ADMIN_RECIPIENT_EMAIL
ARG ADMIN_MAILTO_EMAIL
ARG NEXT_PUBLIC_ORIGIN
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN echo -e "NEXT_PUBLIC_NODE_ENV=${NEXT_PUBLIC_NODE_ENV} \n RESEND_API_KEY=${RESEND_API_KEY} \n ADMIN_RECIPIENT_EMAIL=${ADMIN_RECIPIENT_EMAIL} \n ADMIN_MAILTO_EMAIL=${ADMIN_MAILTO_EMAIL} \n NEXT_PUBLIC_ORIGIN=${NEXT_PUBLIC_ORIGIN}" > /app/.env
RUN yarn build

FROM base AS runner
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.env ./.env

USER nextjs

EXPOSE 3000
# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
