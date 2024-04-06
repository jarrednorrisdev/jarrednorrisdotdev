import { NextResponse } from "next/server";

export async function GET(request, context) {
  console.log("request", request);
  console.log("context", context);
  return NextResponse.json({
    tasks: [
      { id: "0", name: "taskname" },
      { id: "1", name: "taskname" },
    ],
  });
}

export async function POST(request) {
	const contentType = request.headers.get("content-type");
	if (contentType !== "application/json") { 
		return NextResponse.json("invalid content type", {status: 400});
	}
  const data = await request.json();
  return NextResponse.json(data, {status: 201});
}
