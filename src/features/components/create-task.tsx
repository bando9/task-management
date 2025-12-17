import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataStatuses } from "@/data/storage";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiAddLargeLine } from "@remixicon/react";

type CreateTaskProps = {
  handleCreateTask: (event: React.FormEvent<HTMLFormElement>) => null | void;
};

export function CreateTask({ handleCreateTask }: CreateTaskProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="default"
            className="flex gap-2 justify-center items-center"
          >
            <RiAddLargeLine /> Create Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
          </DialogHeader>

          <form method="post" className="space-y-2" onSubmit={handleCreateTask}>
            <Label htmlFor="title">Title </Label>
            <Input type="text" name="title" id="title" required />

            <Label htmlFor="description">Description </Label>
            <Input type="text" name="description" id="description" />

            <Select name="status-slug" defaultValue="backlog">
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {dataStatuses.map((status) => {
                    return (
                      <SelectItem value={status.slug} key={status.slug}>
                        {status.name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit">Create</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
