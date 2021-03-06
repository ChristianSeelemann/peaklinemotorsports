import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import StreamingHeader from "../../../components/StreamingHeader";
import pageProps from "../../../utils/pageProps";
import Headline from "../../../components/Headline";
import NewOverlay from "../../../components/newOverlay";
import EditOverlay from "../../../components/editOverlay";

type Props = {
  locale: string;
  req: NextApiRequest;
  res: NextApiResponse;
  resolvedUrl: string;
  query: {
    page: string;
    id: string;
  };
};

const StreamingEdit: NextPage = ({
  session,
  fetchedData: overlay,
  fetchedDataTwo: eventlogo,
  fetchedDataThree: drivers,
}: any) => {
  const router = useRouter();

  return (
    <div className="pb-8 generic">
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

        <section className="px-4 py-8 mx-4 mt-8 select-none rounded-xl sm:px-6 lg:px-8 sm:mx-6 bg-background lg:mx-12">
          <div>
            {!session ? (
              "Du musst eingeloggt um dein Overlay sehen zu k??nnen."
            ) : overlay && overlay.length === 0 && router.query.id ? (
              "Dieses Overlay existiert nicht."
            ) : (
              <section>
                <Link href="/streaming">
                  <a>
                    <div className="px-2 pt-2 pb-1 rounded-md cursor-pointer w-fit bg-violet-600">
                      ??bersicht
                    </div>
                  </a>
                </Link>
                {router.query.id ? (
                  <EditOverlay
                    session={session}
                    overlay={overlay[0]}
                    eventlogo={eventlogo}
                    drivers={drivers}
                  />
                ) : (
                  <NewOverlay session={session} drivers={drivers} />
                )}
              </section>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default StreamingEdit;

export const getServerSideProps = async (context: Props) => {
  return pageProps(
    context,
    "getSingleOverlay",
    "getSingleUpload",
    "getAllDrivers"
  );
};
