import { TypographyP } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import getDomain from "@/lib/getDomain";
import CreateTask from "./createTask";
import { helloWorld } from "@/lib/db";

export default async function TasksHub() {
  const data = await getData();

  const handleAddTask = async () => {};
  const dbHello = await helloWorld();
  console.log("dbHello", dbHello);

  return (
    <main className="flex flex-col gap-8 border-accent bg-background p-6 md:container md:mx-auto">
      <div className="flex flex-col gap-8">
        <TypographyP>Tasks Page:</TypographyP>
        <ul>
          {data &&
            data.tasks &&
            data.tasks.map((task, idx) => {
              return <li key={`task-${idx}`}>{JSON.stringify(task)}</li>;
            })}
        </ul>
      </div>
      <CreateTask />
    </main>
  );
}

async function getData() {
  const domain = getDomain();
  const endpoint = `${domain}/api/tasks`;
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  if (res.headers.get("Content-Type") !== "application/json") {
    return { tasks: [] };
  }

  const data = res.json();
  return data;
}

export const runtime = "edge";
export const prefferedEdgeRegion = "dub1";
