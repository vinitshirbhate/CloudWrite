"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { deleteDocument } from "@/lib/actions/rooms.actions";
const DeleteModal = ({ roomId }: { roomId: string }) => {
  const [loading, setLoading] = useState(false);
  const [Open, setOpen] = useState(false);
  const deleteDocumentHandler = async () => {
    setLoading(true);

    try {
      await deleteDocument(roomId);
      setOpen(false);
    } catch (error) {
      console.log(`Error Happened while deleting room: ${error}`);
    }
    setLoading(false);
  };
  return (
    <>
      <Dialog open={Open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="min-w-9 rounded-xl bg-transparent p-2 transition-all">
            <Image
              src="/assets/icons/delete.svg"
              alt="delete"
              width={20}
              height={20}
              className="mt-1"
            />
          </Button>
        </DialogTrigger>
        <DialogContent className="shad-dialog">
          <DialogHeader>
            <Image
              src="/assets/icons/delete-modal.svg"
              alt="delete"
              width={48}
              height={48}
              className="mb-4"
            />
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-5">
            <DialogClose asChild className="w-full bg-dark-400 text-white">
              Cancel
            </DialogClose>
            <Button
              variant={"destructive"}
              className="gradient-red w-full"
              onClick={deleteDocumentHandler}
            >
              {loading ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteModal;
