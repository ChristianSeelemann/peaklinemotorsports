import Head from "next/head";
import Achievement from "../../components/Achievement";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
import pageProps from "../../utils/pageProps";

import { achievementsProps } from "../../types/types";
import type { NextApiRequest, NextApiResponse, NextPage } from "next";
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

const Erfolge: NextPage = ({ session, fetchedData: achievements }: any) => {
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
        <Headline
          headline="Unsere Erfolge"
          subheading="Bronzene, Silberne und Goldene Pfeile"
        />

        <section className="flex flex-col mx-6 mt-8 xl:flex-row-reverse sm:mx-8 lg:mx-16 rounded-2xl font-overpass">
          <aside className="w-full xl:max-w-[20rem] xl:min-w-[20rem] mb-12 xl:ml-12 xl:mb-0">
            <div className="px-6 py-5 border-b-2 bg-background border-purple-600/20 rounded-2xl">
              <p className="text-lg leading-7 whitespace-pre-wrap text-purple-100/90 font-overpass editor">
                Seit mittlerweile über einem Jahrzehnt machen die violetten
                Pfeile die virtuellen Rennstrecken der Welt unsicher. Egal ob
                Rundkurs, Oval oder Rally, vor uns ist kein Event sicher. Wir
                haben euch unsere Top-3 Platzierungen in den diversen
                Meisterschaften und Einzelevents zusammen gefasst.
              </p>
            </div>
          </aside>
          {achievements.length === 0 ? (
            <div className="w-full">Kein Erfolg gefunden.</div>
          ) : (
            <div className="w-full">
              {achievements.map((achievement: achievementsProps) => (
                <div key={achievement.id}>
                  <Achievement achievement={achievement} />
                </div>
              ))}
            </div>
          )}
        </section>

        <Sponsors />
      </main>

      <Footer />
    </div>
  );
};

export default Erfolge;

export const getServerSideProps = async (context: Props) => {
  return pageProps(context, "getAchievements");
};
