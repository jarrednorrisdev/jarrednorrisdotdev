import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";

export interface Task {
  id: string;
  name: string;
}

export async function GET(req: NextRequest) {
  console.log("GET /api/tasks");
  return NextResponse.json({
    tasks: [
      { id: "0", name: "taskname0" },
      { id: "1", name: "taskname1" },
    ],
  });
}

export async function POST(req: NextRequest) {
  console.log("POST /api/tasks");
  const headersList = headers();
  const contentType = headersList.get("content-type");

  if (contentType !== "application/json") {
    return NextResponse.json("invalid content type", { status: 400 });
  }

  const data = await req.json();
  return NextResponse.json(data, { status: 201 });
}
