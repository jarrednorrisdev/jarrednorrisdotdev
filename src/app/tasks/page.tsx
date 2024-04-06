import { TypographyP } from "@/components/typography/typography";
import getDomain from "@/lib/getDomain";
// import CreateTask from "./createTask";
import { helloWorld } from "@/db/db";
import { Task } from "../api/tasks/route";

export const runtime = 'edge';

export default async function TasksHub() {
  const data = await getTasks();
  const dbHello = await helloWorld();
  console.log("dbHello", dbHello);

  return (
    <main className="flex flex-col gap-8 border-accent bg-background p-6 md:container md:mx-auto">
      <div className="flex flex-col gap-8">
        <TypographyP>Tasks Page:</TypographyP>
        <ul>
          {data &&
            data.tasks &&
            data.tasks.map((task: Task, idx: number) => {
              return <li key={`task-${idx}`}>{JSON.stringify(task)}</li>;
            })}
        </ul>
      </div>
      {/* <CreateTask /> */}
    </main>
  );
}

async function getTasks() {
  const domain = getDomain();
  const endpoint = `${domain}/api/tasks`;
  console.log("endpoint: ", endpoint);
  const res = await fetch(endpoint, { next: { revalidate: 10 } });
  
  if (!res.ok) {
    console.error(`HTTP error status: ${res.status}`, await res.text());
    throw new Error("Failed to fetch tasks");
  }

  if (res.headers.get("content-type") !== "application/json") {
    throw new Error("Invalid content type");
  }

  return res.json();
}


