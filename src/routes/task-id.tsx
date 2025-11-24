import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialDataTasks } from "@/lib/storage";
import { useParams } from "react-router";

export function TaskId() {
  const tasks = initialDataTasks;

  const params = useParams();
  const { taskId } = params;
  const task = tasks.find((task) => task.id === Number(taskId));

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
