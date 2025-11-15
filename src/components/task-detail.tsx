import { dataTasks } from "../lib/storage";
// import { RiInfoI } from "@remixicon/react";
// import dayjs from "dayjs";

export function TaskDetail() {
  const taskId = 5;
  const foundTaskById = dataTasks.find((task) => task.id === taskId);
  if (!foundTaskById) {
    return;
  }

  // const formattedCreatedAt = dayjs(foundTaskById.createdAt).format(
  //   "MMMM D, YYYY"
  // );
  // const formattedUpdatedAt = dayjs(foundTaskById.updatedAt).format(
  //   "MMMM D, YYYY"
  // );

  return (
    <>
      <h1>Test from Task Detail</h1>
    </>
  );
}
