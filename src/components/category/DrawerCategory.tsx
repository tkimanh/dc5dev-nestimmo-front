"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormPost from "./FormCategory";

const DrawerPost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="default">Create new category</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">
            Ajouter une categorie
          </DrawerTitle>
          <DrawerDescription className="text-center">
            Renseignez le champ.
          </DrawerDescription>
          <FormPost setOpen={setOpen} />
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerPost;
