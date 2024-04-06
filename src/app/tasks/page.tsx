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
  console.log("domain: ", domain);
  const endpoint = `${domain}/api/tasks`;
  const res = await fetch(endpoint, { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  if (res.headers.get("content-type") !== "application/json") {
    return { tasks: [] };
  }

  return res.json();
}


