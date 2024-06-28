"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fetchAllCategories } from "@/services/category.service";
import { createPost } from "@/services/post.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
type FormPostProps = {
  setOpen: (open: boolean) => void;
};

const FormPost = ({ setOpen }: FormPostProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllPosts"],
      });
      setOpen(false);
    },
  });

  const allCategories = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: () => fetchAllCategories(),
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createPostDTO = {
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
    };

    mutation.mutate(createPostDTO);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <Input type="text" placeholder="Post title" name="title" />
      </div>
      <div className="mb-2">
        <Textarea placeholder="Post description" name="description" />
      </div>
      <div className="mb-2">
        <select name="category" id="category-select">
          {allCategories.data?.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.nom}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Button type="submit" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending && (
            <span className="mr-4 h-4 w-4 rounded-full bg-white animate-pulse"></span>
          )}
          Create post
        </Button>
      </div>
    </form>
  );
};

export default FormPost;
