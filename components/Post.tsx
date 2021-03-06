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
            <div className="mb-1 text-xs font-bold uppercase transition-all duration-300 text-violet-300/90 group-hover:text-violet-300/70 font-montserrat">
              {post.competitions
                .map((competition: competitionsProps) => competition.title)
                .join(", ")}
            </div>
            <div className="flex items-center justify-between gap-12">
              <h4>{post.headline}</h4>
              {post.simulation && post.simulation.logo && (
                <div className="hidden max-w-[2.5rem] min-w-[2.5rem] self-end sm:flex sm:pb-[0.3rem]">
                  <Image
                    src={`https://strapi.peaklinems.de${post.simulation.logo.url}`}
                    alt="Simulation Logo"
                    height={post.simulation.logo.height}
                    width={post.simulation.logo.width}
                    priority
                    className={`brightness-0 invert shadow-lg ${
                      post.simulation.slug === "iracing" && "rounded-md"
                    }`}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="absolute w-full h-full transition-all duration-300 bg-gradient-to-b from-violet-600 to-violet-900">
            <Image
              src={`https://strapi.peaklinems.de${
                post.thumbnail.formats.medium
                  ? post.thumbnail.formats.medium.url
                  : post.thumbnail.url
              } `}
              alt={post.thumbnail.name}
              layout="fill"
              priority
              objectFit="cover"
              className="w-full h-full opacity-90 brightness-[0.5] group-hover:opacity-40 transition-all duration-300"
            />
          </div>
        </article>
      </a>
    </Link>
  );
}
