import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronRight } from "react-icons/fa";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sponsors from "../components/Sponsors";
import Welcome from "../components/Welcome";
import pageProps from "../utils/pageProps";

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

const Home: NextPage = ({
  session,
  fetchedData: posts,
  fetchedDataTwo: events,
  streamsData: streams,
}: any) => {
  const router = useRouter();

  return (
    <div className="generic">
      <Head>
        <title>Peakline Motorsports</title>
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
        <meta
          property="og:title"
          content="Peakline Motorsports"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Die violetten Pfeile"
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header session={session} />

      <main>
        <Welcome streams={streams} />
        <Posts posts={posts} />
        <div className="flex items-center justify-center mt-12 mb-16">
          <Link href="/news">
            <a className="flex items-center justify-center group">
              <p className="pr-2 mt-[0.225rem] text-sm font-bold uppercase font-overpass tracking-widest transition-all duration-300 select-none">
                Alle News
              </p>
              <span className="-mr-2 group-hover:text-violet-800">
                <FaChevronRight />
              </span>
              <span className="-mr-2 transition-all duration-300 text-white/60 group-hover:text-violet-800/60">
                <FaChevronRight />
              </span>
              <span className="-mr-2 transition-all duration-300 text-white/40 group-hover:text-violet-800/40">
                <FaChevronRight />
              </span>
            </a>
          </Link>
        </div>
        <Calendar events={events} />
        <Sponsors />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context, "getPostsLastSix", "getEvents");
};
