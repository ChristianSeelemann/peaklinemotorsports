import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import pageProps from "../../utils/pageProps";
import { driversProps } from "../../types/types";

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

const Overlay: NextPage = ({ fetchedData }: any) => {
  const router = useRouter();
  const overlay = fetchedData[0];

  return (
    <div className="overlay">
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

      <main className="w-screen h-screen backdrop-opacity-0">
        <section>
          <section className="fixed w-full bottom-1">
            <div className="flex justify-center">
              {overlay.teamlogo && (
                <div className="mr-2 shadow-md shadow-violet-800 rounded-xl bg-gradient-to-br from-purple-700 to-purple-900">
                  <div className="flex mx-4 mt-[0.7rem]">
                    <div className="w-10 mr-2">
                      <Image
                        src={
                          "https://strapi.peaklinems.de/uploads/Peakline_P_Light_98f96b128f.svg"
                        }
                        alt="Peakline Motorsports Logo"
                        height={181}
                        width={224}
                      />
                    </div>
                    <div className="grid mt-1 text-xs font-bold uppercase">
                      <span className="pb-[0.1rem]">Peakline</span>
                      <span className="-mt-2">Motorsports</span>
                    </div>
                  </div>
                </div>
              )}
              {overlay.sponsors && (
                <>
                  <div className="flex items-center mr-2 shadow-md rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 shadow-violet-700">
                    <div className="mx-2 mt-[0.45rem] w-28">
                      <Image
                        alt="Peakline Logo"
                        src={"https://peaklinems.de/Peakline-Logo.png"}
                        width={310}
                        height={90}
                      />
                    </div>
                  </div>
                  <div className="flex items-center mr-2 shadow-md rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 shadow-violet-600">
                    <div className="w-24 mx-2 mt-[0.45rem]">
                      <Image
                        alt="Kodafactory Logo"
                        src={
                          "https://strapi.peaklinems.de/uploads/Kodafactory_Small_f60a119265.png"
                        }
                        width={310}
                        height={137}
                      />
                    </div>
                  </div>
                  <div className="flex items-center mr-2 shadow-md rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-violet-500">
                    <div className="w-16 mx-1 mt-[0.45rem]">
                      <Image
                        alt="P1-Media Logo"
                        src={"https://peaklinems.de/P1-Media.png"}
                        width={310}
                        height={180}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
          {overlay.relativebox && (
            <section className="fixed w-[27rem] rounded-xl bottom-1 right-1 h-[16rem] bg-gradient-to-br from-black/70 to-black/90 shadow-md shadow-black/50" />
          )}
          {overlay.camera && (
            <section className="fixed w-[23.5rem] rounded-xl bottom-1 left-[1rem] h-[13.21875rem] bg-black/80 place-items-center grid border-[6px] border-violet-600 shadow-md shadow-violet-700">
              Kamera Offline
            </section>
          )}
          {overlay.drivers && overlay.drivers.length > 0 && (
            <section
              className={`fixed rounded-xl w-[16rem] bottom-1 shadow-md shadow-black/50 bg-gradient-to-br from-black/70 to-black/90 pl-3 pr-7 pt-3 pb-1 ${
                overlay.camera ? "left-[25.3rem]" : "left-1"
              }`}
            >
              {overlay.eventlogo && (
                <>
                  <div className="ml-[1.75rem] w-[10rem]">
                    <Image
                      alt="Eventlogo"
                      src={`https://strapi.peaklinems.de${overlay.eventlogo.url}`}
                      height={overlay.eventlogo.height}
                      width={overlay.eventlogo.width}
                    />
                  </div>
                  <div className="h-[2px] m-auto mt-1 mb-3 w-14 bg-violet-500" />
                </>
              )}
              {overlay.drivers.map((driver: driversProps) => (
                <div key={driver.id} className="flex items-center">
                  <div className="w-10 mr-3">
                    <Image
                      src={`https://strapi.peaklinems.de${driver.nationality.url}`}
                      alt="Driver Nationality Flag"
                      width={driver.nationality.width}
                      height={driver.nationality.height}
                      className="rounded-md shadow-md shadow-black/50"
                    />
                  </div>
                  <div>{driver.name}</div>
                </div>
              ))}
            </section>
          )}
        </section>
      </main>
    </div>
  );
};

export default Overlay;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context, "getSingleOverlay");
};
