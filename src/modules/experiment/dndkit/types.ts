export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE" | "BACKLOG";

export type Taskk = {
  id: string;
  status: TaskStatus;
  title: string;
  description: string;
};

export type Column = {
  id: TaskStatus;
  title: string;
};
