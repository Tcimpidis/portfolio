import { NextResponse } from 'next/server'
import { ToolData } from "@/api/portfolio";

export async function GET() {
  return NextResponse.json(ToolData)
}