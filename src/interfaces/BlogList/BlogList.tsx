import Button from "@/components/Button";
import { SubTitle } from "@/components/Text";
import blogData from "@/data/blogData";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import * as S from "./blogList.styled";
import BlogPost from "../BlogPost";
import { useQuery } from "react-query";
import api from "@/services/api";

const BlogList = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const { } = useQuery<IPost[]>({
    queryKey: "posts",
    queryFn: () => api.get("/blog-post").then((res) => res.data),
    onSuccess: (data) => setPosts(data)
  })

  return (
    <S.List>
      {posts?.map((p) => (
        <BlogPost p={p} key={p.id} />
      ))}
    </S.List>
  );
};

export default BlogList;
