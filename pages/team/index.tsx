import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Driver from "../../components/Driver";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
import pageProps from "../../utils/pageProps";
import { FaDiscord } from "react-icons/fa";

import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import { driversProps } from "../../types/types";
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

const Team: NextPage = ({ session, fetchedData: drivers }: any) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Unser Team | Peakline Motorsports</title>
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
        <meta property="og:title" content="Unser Team" key="ogtitle" />
        <meta
          property="og:description"
          content="Die violetten Pfeile"
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header session={session} />

      <main>
        <Headline headline="Unser Team" subheading="Die violetten Pfeile" />

        <section className="flex flex-col justify-between gap-4 mx-6 mt-8 xl:gap-6 lg:flex-row sm:mx-8 lg:mx-16 2xl:gap-8">
          <div className="grid w-full grid-cols-1 gap-5 sm:gap-3 md:gap-4 2xl:grid-cols-4 lg:gap-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {drivers &&
              drivers.length !== 0 &&
              drivers.map((driver: driversProps) => (
                <Driver driver={driver} key={driver.id} />
              ))}
          </div>
          <aside className="select-none">
            <div className="w-full px-6 mt-8 lg:mt-0 sm:mt-10 py-5 border-b-2 bg-background border-violet-700/50 rounded-2xl lg:w-[18.5rem] 2xl:w-[21rem]">
              <h4 className="text-violet-600">
                Du willst ein Teil des Teams werden?
              </h4>
              <p className="mt-6 text-lg leading-7 whitespace-pre-wrap text-violet-100/90 font-overpass editor">
                Egal ob Rookie oder Profi. Egal ob Rundstrecke, Oval oder
                Schotter. Bei den violetten Pfeilen findet jeder Mensch mit
                Passion für den virtuellen Motorsport ein Zuhause. Gespickt mit
                Erfolgen oder als Rookie ganz frisch im Geschäft - Wir sind
                immer offen für neue Teammitglieder!
              </p>
              <Link href="https://discord.gg/hgwdXYM">
                <a target="_blank" className="group">
                  <span className="flex items-center gap-3 mt-8 text-lg font-bold leading-7 text-violet-300/90 font-overpass">
                    <FaDiscord className="-mt-1 text-4xl" />
                    Join unserem Discord
                  </span>
                </a>
              </Link>
            </div>
          </aside>
        </section>

        <Sponsors />
      </main>

      <Footer />
    </div>
  );
};

export default Team;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context, "getDrivers");
};
