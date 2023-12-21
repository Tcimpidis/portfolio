import { NextResponse } from 'next/server'
import { CompanyNames } from "@/api/portfolio";

export async function GET() {
  return NextResponse.json(CompanyNames)
}