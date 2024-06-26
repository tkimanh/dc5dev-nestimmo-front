import { CategoryCreateDTO } from "@/types/category";
import { CATEGORY_ENDPOINT } from "@/utils/constants";

export const fetchAllPosts = async () => {
  const response = await fetch(CATEGORY_ENDPOINT);
  const data = await response.json();
  return data;
};

export const fetchPostById = async (id: string) => {
  const response = await fetch(`${CATEGORY_ENDPOINT}/${id}`);
  const data = await response.json();
  return data;
};

export const createPost = async (createCategoryDTO: CategoryCreateDTO) => {
  const response = await fetch(CATEGORY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createCategoryDTO),
  });
  const data = await response.json();
  return data;
};

export const deletePost = async (id: string) => {
  const response = await fetch(`${CATEGORY_ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
