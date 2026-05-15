import { NextResponse } from "next/server";

// 默认：动态渲染的

export const dynamic = 'force-static'

export async function GET() {
  return NextResponse.json({
    status: 200,
    body: 'success'
  })
}

export async function POST() {
  return NextResponse.json({
    status: 200,
    body: 'success'
  })
}