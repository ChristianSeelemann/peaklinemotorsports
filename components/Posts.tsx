import React from "react";
import Post from "./Post";

import { postsProps } from "../types/types";

type props = {
  posts: postsProps[];
};

export default function Posts({ posts }: props) {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 px-4 mt-20 sm:mt-20 md:mt-24 sm:px-8 md:gap-8 lg:px-16 lg:mt-32 md:grid-cols-2 xl:grid-cols-3">
        {posts &&
          posts.map((post: postsProps) => {
            return <Post post={post} key={post.slug} />;
          })}
      </div>
    </section>
  );
}
