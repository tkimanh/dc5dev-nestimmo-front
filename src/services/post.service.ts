import { PostCreateDTO } from "@/types/post";
import { POST_ENDPOINT } from "@/utils/constants";

export const fetchAllPosts = async () => {
  const response = await fetch(POST_ENDPOINT);
  const data = await response.json();
  return data;
};

export const fetchPostById = async (id: string) => {
  const response = await fetch(`${POST_ENDPOINT}/${id}`);
  const data = await response.json();
  return data;
};

export const createPost = async (createPostDTO: PostCreateDTO) => {
  const response = await fetch(POST_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createPostDTO),
  });
  const data = await response.json();
  return data;
};

export const deletePost = async (id: string) => {
  const response = await fetch(`${POST_ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
