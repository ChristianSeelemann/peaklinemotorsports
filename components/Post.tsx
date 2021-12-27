/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { competitionsProps, postsProps } from "../types/types";

export default function Post({ post }: { post: postsProps }) {
  return (
    <Link href={`/news/${post.slug}`}>
      <a>
        <article className="relative grid content-end h-64 gap-2 px-4 py-4 overflow-hidden rounded-lg shadow-md select-none sm:py-6 group shadow-purple-900/10 sm:px-7">
          <div className="z-40">
            <div className="mb-1 text-xs font-bold uppercase transition-all duration-300 text-purple-300/90 group-hover:text-purple-200/70 font-montserrat">
              {post.competitions
                .map((competition: competitionsProps) => competition.title)
                .join(", ")}
            </div>
            <div className="flex items-center justify-between gap-12">
              <h4>{post.headline}</h4>
              {post.simulation && post.simulation.logo && (
                <div className="hidden sm:flex">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${post.simulation.logo.url}`}
                    alt="Simulation Logo"
                    className={`brightness-0 invert max-w-[2.5rem] shadow-lg h-auto ${
                      post.simulation.slug === "iracing" && "rounded-md"
                    }`}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="absolute w-full h-full transition-all duration-300 bg-gradient-to-b from-purple-500 to-purple-800">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${
                post.thumbnail.formats.medium
                  ? post.thumbnail.formats.medium.url
                  : post.thumbnail.url
              } `}
              alt={post.thumbnail.name}
              layout="fill"
              className="object-cover object-center w-full h-full opacity-90 brightness-[0.5] group-hover:opacity-40 transition-all duration-300"
            />
          </div>
        </article>
      </a>
    </Link>
  );
}
