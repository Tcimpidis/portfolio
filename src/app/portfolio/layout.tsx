import { Suspense } from "react"

export default async function Layout(props: {
  children: React.ReactNode
  tool: React.ReactNode
  experience: React.ReactNode
}) {
  return (
    <>
      {props.children}
      <Suspense fallback={<span>...loading</span>}  >
        {props.tool}
      </Suspense>
      <Suspense fallback={<span>...loading</span>}  >
        {props.experience}
      </Suspense>
    </>
  )
}