import dayjs from "dayjs";
import { dataTasks } from "../lib/storage";
import { Task } from "./task";

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "backlog":
      return `capitalize inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20`;
    case "to do":
      return `capitalize inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20 `;
    case "in-progress":
      return `capitalize inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-500/20"`;
    case "done":
      return `capitalize inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20`;
  }
}

export function ListTask() {
  return (
    <ul>
      {dataTasks.map((task) => {
        const {
          id,
          title,
          status: { statusName },
          description,
          createdAt,
        } = task;

        const dateOfCreatedAt = dayjs(createdAt).format("MMMM D, YYYY");
        // const now = dayjs();
        // console.log(dateOfCreatedAt.format("MMMM D, YYYY"));

        return (
          <Task
            key={id}
            title={title}
            statusName={statusName}
            className={getStatusBadge(statusName)}
            description={description ?? ""}
            createdAt={dateOfCreatedAt}
          />
        );
      })}
    </ul>
  );
}
