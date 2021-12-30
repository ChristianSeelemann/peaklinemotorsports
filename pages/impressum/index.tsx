import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import Sponsors from "../../components/Sponsors";

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

const Impressum: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Impressum | Peakline Motorsports</title>
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
        <meta property="og:title" content="Impressum" key="ogtitle" />
        <meta
          property="og:description"
          content="Die violetten Pfeile"
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main>
        <Headline headline="Impressum" />

        <section className="px-6 py-5 mx-6 mt-8 text-lg leading-7 break-words border-b-2 border-violet-600/20 sm:mx-8 lg:mx-16 rounded-2xl text-violet-100/90 font-overpass editor bg-background">
          <div className="mb-8">
            <h4 className="pb-6 text-violet-600">Angaben gemäß § 5 TMG</h4>
            <p>Christian Seelemann</p>
            <p>Wiesenweg 13</p>
            <p>21423 Winsen (Luhe)</p>
          </div>
          <div className="mb-8">
            <h4 className="pb-6 text-violet-600">Kontakt</h4>
            <p>E-Mail: info[at]peaklinems.de</p>
          </div>
          <div className="mb-8">
            <h4 className="pb-6 text-violet-600">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h4>
            <p>Christian Seelemann</p>
          </div>
          <div className="mb-2">
            <h4 className="pb-6 text-violet-600">
              Ansprechpartner für Sponsoren- Werbung- und
              Affiliateangelegenheiten
            </h4>
            <p>Christian Seelemann</p>
            <p>info[at]peakline.motorsports.de</p>
          </div>
        </section>

        <Sponsors />
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;

/* export const getServerSideProps = async (context: Props) => {
  return pageProps(context);
};
 */
