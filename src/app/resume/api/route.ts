import { NextResponse } from 'next/server'
import { ResumeData } from '@/api/resume';

export async function GET() {
  return NextResponse.json(ResumeData)
}