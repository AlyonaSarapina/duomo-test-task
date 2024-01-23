import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  console.log(data.email)

  return NextResponse.json({ data });
}
