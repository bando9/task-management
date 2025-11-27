import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Tasks } from "@/modules/task/schema";
import { Link, useParams } from "react-router";

export function TaskId() {
  const params = useParams();
  const { taskId } = params;

  window.scrollTo(0, 0);
  const storedTasks = localStorage.getItem("tasks");
  if (!storedTasks) {
    return (
      <>
        <h1>Task data unavailable</h1>
        <Link to="/">Go to home</Link>
      </>
    );
  }

  const parsedTasks = JSON.parse(storedTasks) as Tasks;

  const task = parsedTasks.find((task) => task.id === Number(taskId));

  if (!task) {
    return (
      <div>
        <h1>Task not Found</h1>
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen p-10 transition-all duration-300 mx-auto space-y-5 ">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{task.title}</CardTitle>
          </CardHeader>
          <CardContent>{task.description} </CardContent>
          <CardFooter className="flex-col gap-2"></CardFooter>
        </Card>
      </main>
    </>
  );
}
