import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
import pageProps from "../../utils/pageProps";
import { HiPencil } from "react-icons/hi";

import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Lightbox from "../../components/Lightbox";
import Headline from "../../components/Headline";

type Props = {
  locale: string;
  req: NextApiRequest;
  res: NextApiResponse;
  resolvedUrl: string;
  query: {
    page: string;
    slug: string;
  };
};

const SingleNews: NextPage = ({ session, fetchedData: posts }: any) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [fromTop, setFromTop] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageName, setImageName] = useState("");

  const router = useRouter();

  const post = posts[0];

  const embedID = post.youtube?.substring(post.youtube.indexOf("v=") + 2);

  function handleImageClick(
    url: string,
    height: number,
    width: number,
    name: string
  ) {
    const body = document.querySelector("body");
    if (body) {
      setImageUrl(url);
      setImageWidth(width);
      setImageHeight(height);
      setImageName(name);
      body.style.overflow = "hidden";
      setFromTop(window.scrollY);
      setIsLightboxOpen(true);
    }
  }

  return (
    <div>
      <Head>
        <title>{`${post.headline} | Peakline Motorsports`}</title>
        <meta name="description" content="Simracing Team" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8d00ff" />
        <meta
          name="apple-mobile-web-app-title"
          content="Peakline Motorsports"
        />
        <meta name="application-name" content="Peakline Motorsports" />
        <meta name="msapplication-TileColor" content="#8d00ff" />
        <meta name="theme-color" content="#8d00ff" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          property="og:url"
          content={`https://peaklinems.de${router.asPath}`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API_URL}${post.thumbnail.url}`}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Peakline Motorsports"
          key="ogsitename"
        />
        <meta property="og:title" content={post.headline} key="ogtitle" />
        <meta property="og:description" content={post.content} key="ogdesc" />
        <meta property="og:type" content="website" />
      </Head>

      <Header session={session} />

      <main>
        <Headline headline={post.headline} />
        <article className="mx-4 overflow-hidden lg:flex lg:justify-between lg:gap-6 rounded-t-xl sm:mx-8 lg:mx-16">
          {post.thumbnail && post.thumbnail.url && (
            <div className="block lg:min-w-[20rem] select-none relative">
              <Image
                src={`https://strapi.peaklinems.de${
                  post.thumbnail.formats.large
                    ? post.thumbnail.formats.large.url
                    : post.thumbnail.url
                }`}
                alt="Post Image"
                layout="responsive"
                priority
                width={
                  post.thumbnail.formats.large
                    ? post.thumbnail.formats.large.width
                    : post.thumbnail.width
                }
                height={
                  post.thumbnail.formats.large
                    ? post.thumbnail.formats.large.height
                    : post.thumbnail.height
                }
                className="lg:shadow-lg lg:rounded-lg bg-violet-300/10"
              />
              {post.drivers.length !== 0 && (
                <div className="absolute z-10 flex top-2 sm:top-4 right-4 sm:right-8 lg:right-4">
                  {post.drivers.map(
                    (driver: any, index: number) =>
                      driver.image && (
                        <a style={{ zIndex: index + 50 }} key={driver.id}>
                          <div className="block w-12 h-12 -ml-6 border-4 rounded-full sm:-ml-8 sm:w-14 sm:h-14 border-black/30">
                            <Image
                              src={`https://strapi.peaklinems.de${driver.image.formats.thumbnail.url}`}
                              alt={`Bild von ${driver.name}`}
                              width={driver.image.formats.thumbnail.width}
                              height={driver.image.formats.thumbnail.height}
                              layout="responsive"
                              priority
                              className="rounded-full"
                            />
                          </div>
                        </a>
                      )
                  )}
                </div>
              )}
              <section className="relative flex justify-between px-2 sm:px-8 lg:px-0 lg:w-full lg:grid -top-[5.5rem] sm:-top-24 lg:top-2 lg:gap-2">
                <div className="flex items-center gap-4 px-3 sm:px-4 py-2 text-sm rounded-lg shadow-md lg:w-[20rem] bg-background lg:bg-gradient-to-r lg:from-violet-800/80 lg:to-violet-600/80 text-violet-100/90">
                  {post.simulation.logo && post.simulation.logo.url && (
                    <div className="block w-6">
                      <Image
                        src={`https://strapi.peaklinems.de${post.simulation.logo.url}`}
                        alt="Simulation Logo"
                        height={post.simulation.logo.height}
                        width={post.simulation.logo.width}
                        layout="responsive"
                        priority
                        className={`brightness-0 invert ${
                          post.simulation.slug === "iracing" && "rounded-md"
                        }`}
                      />
                    </div>
                  )}
                  <div className="mt-1">{post.competitions[0].title}</div>
                </div>
                {post.authors.length !== 0 && (
                  <div className="items-center hidden gap-2 px-4 py-2 text-sm rounded-lg shadow-md sm:flex bg-background lg:bg-gradient-to-r lg:from-violet-800/80 lg:to-violet-600/80 text-violet-100/90">
                    <HiPencil className="text-2xl" />
                    <span className="mt-1">
                      {post.authors.length > 1
                        ? `${post.authors
                            .map((author: any) => author.name)
                            .join(" & ")}`
                        : `${post.authors[0].name}`}
                    </span>
                  </div>
                )}
              </section>
            </div>
          )}
          <section className="relative px-6 pt-6 pb-8 -mt-20 border-b-2 bg-background rounded-2xl lg:-mt-0 border-b-violet-700/50">
            <div
              className="text-lg leading-7 whitespace-pre-wrap text-violet-100/90 font-overpass editor"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            {post.youtube && (
              <section className="mt-8">
                <div className="relative h-0 overflow-hidden pb-[56.25%]">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube-nocookie.com/embed/${embedID}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Youtube Video"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  />
                </div>
              </section>
            )}

            {post.gallery.length !== 0 && (
              <section className="grid grid-cols-2 gap-2 mt-10 mb-3 select-none md:grid-cols-4 sm:grid-cols-3 2xl:grid-cols-5 sm:gap-3">
                {post.gallery.map((image: any) => (
                  <div
                    key={image.id}
                    className="cursor-pointer"
                    onClick={() =>
                      handleImageClick(
                        image.url,
                        image.height,
                        image.width,
                        image.name
                      )
                    }
                  >
                    <Image
                      src={`https://strapi.peaklinems.de${
                        image.formats.medium
                          ? image.formats.medium.url
                          : image.url
                      }`}
                      alt={image.name}
                      height={
                        image.formats.medium
                          ? image.formats.medium.height
                          : image.height
                      }
                      width={
                        image.formats.medium
                          ? image.formats.medium.width
                          : image.width
                      }
                      className="rounded-md shadow-md bg-violet-300/10"
                    />
                  </div>
                ))}
              </section>
            )}
          </section>
        </article>

        <Sponsors />
      </main>

      <Footer />

      {isLightboxOpen && (
        <Lightbox
          url={imageUrl}
          height={imageHeight}
          width={imageWidth}
          setIsLightboxOpen={setIsLightboxOpen}
          fromTop={fromTop}
          name={imageName}
        />
      )}
    </div>
  );
};

export default SingleNews;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context, "getSinglePost", "countPosts");
};
