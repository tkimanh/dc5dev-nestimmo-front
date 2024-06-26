'use client'

import { fetchPostById } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

type PostDetailParams = {
    id: string;
}

const PostDetail = () => {
    const { id } = useParams<PostDetailParams>();

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetchPostById(id)
    })

    if(isPending) return <div className="h-full flex justify-center items-center">Loading...</div>
    
    return ( 
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
     );
}
 
export default PostDetail;