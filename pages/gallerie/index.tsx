import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
import pageProps from "../../utils/pageProps";
import { postsProps } from "../../types/types";
import { useState } from "react";
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

const Gallerie: NextPage = ({ session, fetchedData: posts }: any) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [fromTop, setFromTop] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageName, setImageName] = useState("");

  const router = useRouter();

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
        <title>Gallerie | Peakline Motorsports</title>
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
          content="https://strapi.peaklinems.de/uploads/Flan_ch_F3_Monza_Rennbericht_10_f3f11b459e.jpg"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Peakline Motorsports"
          key="ogsitename"
        />
        <meta property="og:title" content="Gallerie" key="ogtitle" />
        <meta
          property="og:description"
          content="Die violetten Pfeile"
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header session={session} />

      <main>
        <Headline
          headline="Gallerie"
          subheading="Impressionen direkt vom Track"
        />

        <section className="px-4 mt-8 select-none sm:px-8 lg:px-16">
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
                      className="rounded-md shadow-lg bg-violet-300/10 lg:rounded-xl"
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
