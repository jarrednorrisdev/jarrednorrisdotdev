import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";

export const runtime = 'edge';

export interface Task {
  id: string;
  name: string;
}

export async function GET(req: NextRequest, res: NextResponse<Task>) {
  console.log("request", req);
  console.log("context", res);
  return Response.json({
    tasks: [
      { id: "0", name: "taskname" },
      { id: "1", name: "taskname" },
    ],
  });
}

export async function POST(req: NextRequest) {
  const headersList = headers();

  const contentType = headersList.get("content-type");
  console.log("contentType: ", contentType);

  if (contentType !== "application/json") {
    return NextResponse.json("invalid content typee", { status: 400 });
  }
  const data = await req.json();
  return Response.json(data, { status: 201 });
}
