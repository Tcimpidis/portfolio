import { NextResponse } from 'next/server'
import { ProjectData } from "@/api/portfolio";

export async function GET() {
  return NextResponse.json(ProjectData)
}