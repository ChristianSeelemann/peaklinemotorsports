import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
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

const Erfolge: NextPage = ({ session }: any) => {
  return (
    <div>
      <Head>
        <title>Unsere Erfolge | Peakline Motorsports</title>
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
            Erfolge
          </h1>
        </section>

        <section className="px-6 py-5 mx-6 mt-8 text-lg leading-7 whitespace-pre-wrap border-b-2 border-purple-600/20 sm:mx-8 lg:mx-16 rounded-2xl text-purple-100/90 font-overpass editor bg-background">
          Folgt
        </section>

        <Sponsors />
      </main>

      <Footer />
    </div>
  );
};

export default Erfolge;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context);
};
