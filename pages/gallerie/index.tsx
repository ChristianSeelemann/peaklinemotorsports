import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
import pageProps from "../../utils/pageProps";
import { postsProps } from "../../types/types";
import { useState } from "react";
import Lightbox from "../../components/Lightbox";

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

const Gallerie: NextPage = ({ session, fetchedData: posts }: any) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [fromTop, setFromTop] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageName, setImageName] = useState("");

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
        <title>Neugikeiten | Peakline Motorsports</title>
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
      </Head>

      <Header session={session} />

      <main>
        <section className="grid mx-6 mt-4 mb-12 xl:mb-20 md:mb-16 md:mt-12 lg:mt-20 sm:mx-8 lg:mx-16">
          <h1 className="text-4xl sm:text-5xl leading-[2.5rem] sm:leading-[3.5rem]">
            Gallerie
          </h1>
          <h2 className="text-sm sm:text-base leading-[2rem] sm:leading-[2.5rem] font-normal font-overpass text-purple-400/60">
            Impressionen direkt vom Track
          </h2>
        </section>

        <section className="px-4 mt-8 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 sm:pb-8 rounded-2xl md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-x-2 lg:gap-x-4 lg:gap-y-2 2xl:grid-cols-6">
            {posts.map(
              (post: postsProps) =>
                post.gallery.length !== 0 &&
                post.gallery.length &&
                post.gallery.map((image: any) => (
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
                      src={`${process.env.NEXT_PUBLIC_API_URL}${
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
                      className="rounded-md shadow-lg bg-purple-300/10 lg:rounded-xl"
                    />
                  </div>
                ))
            )}
          </div>
        </section>

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

export default Gallerie;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context, "getPostsAll");
};
