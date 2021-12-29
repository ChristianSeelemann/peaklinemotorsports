import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Headline from "../../components/Headline";
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

const Fahrergesucht: NextPage = ({ session }: any) => {
  return (
    <div>
      <Head>
        <title>Wir suchen dich! | Peakline Motorsports</title>
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
        <Headline
          headline="Wir suchen dich!"
          subheading="Werde ein Teil der violetten Pfeile"
        />

        <section className="px-6 py-5 mx-6 mt-8 text-lg leading-7 whitespace-pre-wrap border-b-2 border-purple-600/20 sm:mx-8 lg:mx-16 rounded-2xl text-purple-100/90 font-overpass editor bg-background">
          Folgt
        </section>

        <Sponsors />
      </main>

      <Footer />
    </div>
  );
};

export default Fahrergesucht;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context);
};
