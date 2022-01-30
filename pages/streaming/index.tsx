import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import StreamingHeader from "../../components/StreamingHeader";
import pageProps from "../../utils/pageProps";
import Headline from "../../components/Headline";
import { overlayProps } from "../../types/types";

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

const Streaming: NextPage = ({ session, fetchedData: overlays }: any) => {
  const router = useRouter();

  return (
    <div className="generic">
      <Head>
        <title>Streaming Overlay System | Peakline Motorsports</title>
        <meta
          name="description"
          content="Peakline Motorsports Streaming Overlay"
        />
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
        <meta property="og:title" content="Streaming Overlay" key="ogtitle" />
        <meta
          property="og:description"
          content="Peakline Motorsports Streaming Overlay"
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
      </Head>

      <StreamingHeader session={session} />

      <main>
        <Headline
          headline="Streaming Overlay System"
          subheading="Peakline Motorsports"
        />

        <section className="px-4 mt-8 select-none sm:px-8 lg:px-16">
          <div>
            {!session ? (
              "Du musst eingeloggt sein um eigene Overlays erstellen zu können."
            ) : overlays && overlays.length === 0 ? (
              "Keine Overlays vorhanden."
            ) : (
              <section>
                <section className="flex justify-between gap-4">
                  <div>Typ</div>
                  <div>Name</div>
                </section>
                {overlays.map((overlay: overlayProps) => (
                  <section
                    key={overlay.slug}
                    className="flex justify-between gap-4"
                  >
                    <div>{overlay.userID}</div>
                    <div>{overlay.type}</div>
                  </section>
                ))}
              </section>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Streaming;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context, "getOverlays");
};
