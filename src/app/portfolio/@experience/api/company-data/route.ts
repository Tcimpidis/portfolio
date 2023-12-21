import { NextResponse } from 'next/server'
import { CompanyData } from "@/api/portfolio";

export async function GET() {
  return NextResponse.json(CompanyData)
}