"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createCategory } from "@/services/category.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type FormPostProps = {
  setOpen: (open: boolean) => void;
};

const FormCategory = ({ setOpen }: FormPostProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllCategories"],
      });
      setOpen(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createCategoryDTO = {
      nom: e.target.nom.value,
    };

    mutation.mutate(createCategoryDTO);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <Input type="text" placeholder="Category name" name="nom" />
      </div>
      <div>
        <Button type="submit" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending && (
            <span className="mr-4 h-4 w-4 rounded-full bg-white animate-pulse"></span>
          )}
          Create category
        </Button>
      </div>
    </form>
  );
};

export default FormCategory;
