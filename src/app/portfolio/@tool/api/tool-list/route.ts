import { NextResponse } from 'next/server'
import { ToolsList } from "@/api/portfolio";

export async function GET() {
  return NextResponse.json(ToolsList)
}