import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 200,
    body: "success",
  });

  //   const searchParams = new URL(request.url).searchParams;
  //   console.log(searchParams.get("city"));
  //   console.log("process.env.NEXT_BASE_URL", process.env.NEXT_BASE_URL);

  //   const res = await fetch(`${process.env.NEXT_BASE_URL}posts`);
  //   const data = await res.json();
  //   return NextResponse.json({
  //     status: 200,
  //     body: "get posts success",
  //     data,
  //   });
}

export async function POST(request: NextRequest) {
  const { city } = await request.json();
  console.log(city);
  return NextResponse.json({
    status: 200,
    body: "post success",
  });
}

export function PUT() {}

export function DELETE() {}
