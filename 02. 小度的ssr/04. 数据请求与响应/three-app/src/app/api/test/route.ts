import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  return NextResponse.json({
    status: 200,
    body: "success",
    data: {
      city: searchParams.get("city"),
    },
  });
}
