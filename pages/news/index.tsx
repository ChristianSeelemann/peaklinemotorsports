import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Sponsors from "../../components/Sponsors";
import pageProps from "../../utils/pageProps";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";
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

const News: NextPage = ({
  session,
  fetchedData: posts,
  fetchedDataTwo: postCount,
}: any) => {
  const router = useRouter();

  const actualSite = router.query.page ? Number(router.query.page) : 1;
  const siteCount = Math.ceil(postCount / 9);
  const activePage = actualSite || "1";
  const prevoius = actualSite - 1;
  const next = actualSite + 1;

  return (
    <div className="generic">
      <Head>
        <title>Neugikeiten | Peakline Motorsports</title>
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
        <meta property="og:title" content="Neuigkeiten" key="ogtitle" />
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
          headline="Neugikeiten"
          subheading="Aktuelles. Rennberichte. Wissenswertes."
        />

        <div className="-mt-12 lg:-mt-12">
          <Posts posts={posts} />
        </div>

        {postCount > 9 && (
          <section className="flex gap-2 mx-4 mt-8 select-none sm:mx-8 lg:mx-16">
            {activePage !== 1 && (
              <div className="flex items-center mr-2 text-2xl">
                <Link href={`/news?page=1`}>
                  <a>
                    <div>
                      <BiChevronsLeft />
                    </div>
                  </a>
                </Link>
                <Link href={`/news?page=${prevoius}`}>
                  <a>
                    <div>
                      <BiChevronLeft />
                    </div>
                  </a>
                </Link>
              </div>
            )}
            <nav>
              <ul className="flex gap-4 text-lg">
                {Number(activePage) - 2 > 0 && (
                  <Link href={`/news?page=${Number(activePage) - 2}`}>
                    <a>
                      <li className="px-3 pt-2 pb-1 rounded-md shadow-md bg-violet-600/20">
                        {Number(activePage) - 2}
                      </li>
                    </a>
                  </Link>
                )}
                {Number(activePage) - 1 > 0 && (
                  <Link href={`/news?page=${Number(activePage) - 1}`}>
                    <a>
                      <li className="px-3 pt-2 pb-1 rounded-md shadow-md bg-violet-600/40">
                        {Number(activePage) - 1}
                      </li>
                    </a>
                  </Link>
                )}
                <Link href={`/news?page=${activePage}`}>
                  <a>
                    <li className="px-3 pt-2 pb-1 rounded-md shadow-md bg-violet-600/70">
                      {activePage}
                    </li>
                  </a>
                </Link>
                {Number(activePage) + 1 <= siteCount && (
                  <Link href={`/news?page=${Number(activePage) + 1}`}>
                    <a>
                      <li className="px-3 pt-2 pb-1 rounded-md shadow-md bg-violet-600/40">
                        {Number(activePage) + 1}
                      </li>
                    </a>
                  </Link>
                )}
                {Number(activePage) + 2 <= siteCount && (
                  <Link href={`/news?page=${Number(activePage) + 2}`}>
                    <a>
                      <li className="px-3 pt-2 pb-1 rounded-md shadow-md bg-violet-600/20">
                        {Number(activePage) + 2}
                      </li>
                    </a>
                  </Link>
                )}
              </ul>
            </nav>
            {activePage !== siteCount && (
              <div className="flex items-center ml-2 text-2xl">
                <Link href={`/news?page=${next}`}>
                  <a>
                    <div>
                      <BiChevronRight />
                    </div>
                  </a>
                </Link>
                <Link href={`/news?page=${siteCount}`}>
                  <a>
                    <div>
                      <BiChevronsRight />
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </section>
        )}

        <Sponsors />
      </main>

      <Footer />
    </div>
  );
};

export default News;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context, "getPostsWithFilter", "countPosts");
};
