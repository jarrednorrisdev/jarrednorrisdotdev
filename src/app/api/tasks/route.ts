import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

interface Task {
  id: string;
  name: string;
}

export async function GET(req: NextApiRequest, res: NextApiResponse<Task>) {
  console.log("request", req);
  console.log("context", res);
  return NextResponse.json({
    tasks: [
      { id: "0", name: "taskname" },
      { id: "1", name: "taskname" },
    ],
  });
}

export async function POST(req: NextApiRequest) {
  const headersList = headers();

  const contentType = headersList.get("content-type");
  console.log("contentType: ", contentType);

  if (contentType !== "application/json") {
    return NextResponse.json("invalid content typee", { status: 400 });
  }
  const data = await req.read();
  return NextResponse.json(data, { status: 201 });
}
