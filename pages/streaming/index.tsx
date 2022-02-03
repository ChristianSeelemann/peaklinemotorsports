import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
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

  function handleDelete(id: number) {
    axios
      .delete(`https://strapi.peaklinems.de/overlays/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      })
      .then(function () {
        router.push(router.asPath);
      })
      .catch(function () {
        alert("Löschen fehlgeschlagen.");
      });
  }

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

        <section className="px-4 py-4 mx-4 mt-8 select-none rounded-xl sm:px-6 lg:px-8 sm:mx-6 bg-background lg:mx-12">
          <div>
            {!session ? (
              "Du musst eingeloggt sein um eigene Overlays erstellen zu können."
            ) : overlays && overlays.length === 0 ? (
              "Keine Overlays vorhanden."
            ) : (
              <section>
                <Link href="/streaming/edit">
                  <a>
                    <div className="px-2 pt-2 pb-1 rounded-md cursor-pointer w-fit bg-violet-600">
                      Neues Overlay
                    </div>
                  </a>
                </Link>
                <section className="grid gap-2 mt-6">
                  {overlays.map((overlay: overlayProps) => {
                    if (
                      overlay.userID === session.name ||
                      overlay.private === false
                    ) {
                      return (
                        <section
                          key={overlay.slug}
                          className="grid items-center grid-cols-3 gap-4"
                        >
                          <div>{overlay.bezeichnung}</div>
                          <div>{overlay.userID}</div>
                          <div className="flex justify-end gap-2">
                            <Link href={`/streaming/${overlay.slug}`}>
                              <a target="_blank" rel="noopener">
                                <div className="px-2 pt-2 pb-1 rounded-md cursor-pointer bg-violet-600">
                                  Link
                                </div>
                              </a>
                            </Link>
                            <Link href={`/streaming/edit?slug=${overlay.slug}`}>
                              <a>
                                <div className="px-2 pt-2 pb-1 bg-orange-500 rounded-md cursor-pointer">
                                  Edit
                                </div>
                              </a>
                            </Link>
                            <div
                              className="px-2 pt-2 pb-1 bg-red-600 rounded-md cursor-pointer"
                              onClick={() => {
                                if (
                                  confirm(
                                    "Willst du das Overlay wirklich löschen?"
                                  ) === true
                                ) {
                                  handleDelete(overlay.id);
                                }
                              }}
                            >
                              Delete
                            </div>
                          </div>
                        </section>
                      );
                    }
                  })}
                </section>
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
