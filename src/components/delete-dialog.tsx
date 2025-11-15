import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { RiDeleteBin6Fill } from "@remixicon/react";

export function DeleteDialog() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <RiDeleteBin6Fill className="text-red-400 w-5 hover:cursor-pointer" />
      </AlertDialog.Trigger>

      <AlertDialog.Content maxWidth="500px">
        <AlertDialog.Title>Delete Task</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to delete this task? This action is permanent
          and cannot be undone.
        </AlertDialog.Description>

        <Flex gap="3" justify="end" className="mt-10">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>

          <AlertDialog.Action>
            <Button color="red">Delete Task</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
