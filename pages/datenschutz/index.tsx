import type { NextApiRequest, NextApiResponse, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sponsors from "../../components/Sponsors";
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

const Datenschutz: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Datenschutz | Peakline Motorsports</title>
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
        <meta property="og:title" content="Datenschutz" key="ogtitle" />
        <meta
          property="og:description"
          content="Die violetten Pfeile"
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main>
        <Headline headline="Datenschutz" />

        <section className="px-6 py-5 mx-6 mt-8 text-lg leading-7 break-words whitespace-pre-wrap border-b-2 sm:mx-8 lg:mx-16 rounded-2xl bg-background border-purple-600/20 text-purple-100/90 font-overpass editor">
          <p>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
            Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz
            „Daten“) innerhalb unseres Onlineangebotes und der mit ihm
            verbundenen Webseiten, Funktionen und Inhalte sowie externen
            Onlinepräsenzen, wie z.B. unser Social Media Profile auf
            (nachfolgend gemeinsam bezeichnet als „Onlineangebot“). Im Hinblick
            auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder
            „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der
            Datenschutzgrundverordnung (DSGVO).
          </p>
          <h4 className="pt-8 pb-6 text-purple-600">Verantwortlicher</h4>
          <div className="mb-8">
            <p>Christian Seelemann</p>
            <p>Wiesenweg 13</p>
            <p>21423 Winsen (Luhe)</p>
            <br />
            <br />
            <p>E-Mailadresse: info[at]peaklinems.de</p>
            <p>www.peakline-motorsports.de</p>
            <p>
              <Link href="/impressum">Link zum Impressum</Link>
            </p>
          </div>
          <h4 className="pb-6 text-purple-600">
            Arten der verarbeiteten Daten
          </h4>
          <div className="mb-8">
            <p>- keine</p>
          </div>
          <h4 className="pb-6 text-purple-600">
            Kategorien betroffener Personen
          </h4>
          <div className="mb-8">
            <p>
              Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen
              wir die betroffenen Personen zusammenfassend auch als „Nutzer“).
            </p>
          </div>
          <h4 className="pb-6 text-purple-600">Zweck der Verarbeitung</h4>
          <div className="mb-8">
            <p>Wir verarbeiten keine Nutzerdaten.</p>
          </div>
          <h4 className="pb-6 text-purple-600">
            Einbindung von Diensten und Inhalten Dritter
          </h4>
          <div className="mb-8">
            <p>
              Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer
              berechtigten Interessen (d.h. Interesse an der Analyse,
              Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes
              im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder
              Serviceangebote von Drittanbietern ein, um deren Inhalte und
              Services, wie z.B. Videos oder Schriftarten einzubinden
              (nachfolgend einheitlich bezeichnet als “Inhalte”).
            </p>
            <p>
              Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte,
              die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse
              die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse
              ist damit für die Darstellung dieser Inhalte erforderlich. Wir
              bemühen uns nur solche Inhalte zu verwenden, deren jeweilige
              Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte
              verwenden. Drittanbieter können ferner so genannte Pixel-Tags
              (unsichtbare Grafiken, auch als „Web Beacons“ bezeichnet) für
              statistische oder Marketingzwecke verwenden. Durch die
              „Pixel-Tags“ können Informationen, wie der Besucherverkehr auf den
              Seiten dieser Website ausgewertet werden. Die pseudonymen
              Informationen können ferner in Cookies auf dem Gerät der Nutzer
              gespeichert werden und unter anderem technische Informationen zum
              Browser und Betriebssystem, verweisende Webseiten, Besuchszeit
              sowie weitere Angaben zur Nutzung unseres Onlineangebotes
              enthalten, als auch mit solchen Informationen aus anderen Quellen
              verbunden werden.
            </p>
          </div>
          <h4 className="pb-6 text-purple-600">Youtube</h4>
          <div className="mb-8">
            <p>
              Wir binden die Videos der Plattform “YouTube” des Anbieters Google
              LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein.
              Datenschutzerklärung: https://www.google.com/policies/privacy/,
              Opt-Out: https://adssettings.google.com/authenticated.
            </p>
          </div>
          <h4 className="pb-6 text-purple-600">Google Fonts</h4>
          <div className="mb-2">
            <p>
              Wir binden die Schriftarten („Google Fonts“) des Anbieters Google
              LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein.
              Datenschutzerklärung: https://www.google.com/policies/privacy/,
              Opt-Out: https://adssettings.google.com/authenticated.
            </p>
          </div>
        </section>

        <Sponsors />
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;

/* export const getServerSideProps = async (context: Props) => {
  return pageProps(context);
};
 */
