import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import Driver from "../../components/Driver";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
import { driversProps } from "../../types/types";
import pageProps from "../../utils/pageProps";

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
      </Head>

      <Header session={session} />

      <main>
        <section className="grid mx-6 mt-4 mb-12 select-none xl:mb-20 md:mb-16 md:mt-12 lg:mt-20 sm:mx-8 lg:mx-16">
          <h1 className="text-4xl sm:text-5xl leading-[2.5rem] sm:leading-[3.5rem]">
            Unser Team
          </h1>
          <h2 className="text-sm sm:text-base leading-[2rem] sm:leading-[2.5rem] font-normal font-overpass text-purple-400/60">
            Die violetten Pfeile
          </h2>
        </section>

        <section className="flex flex-col justify-between gap-4 mx-6 mt-8 xl:gap-6 lg:flex-row sm:mx-8 lg:mx-16 2xl:gap-8">
          <div className="grid w-full grid-cols-1 gap-3 md:gap-4 2xl:grid-cols-4 lg:gap-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {drivers &&
              drivers.length !== 0 &&
              drivers.map((driver: driversProps) => (
                <Driver driver={driver} key={driver.id} />
              ))}
          </div>
          <aside>
            <div className="w-full px-6 py-5 border-b-2 bg-background border-purple-600/20 rounded-2xl lg:w-[22rem]">
              Aside
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
