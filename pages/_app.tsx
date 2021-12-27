import { useRouter } from "next/router";
import { Provider as AuthProvider } from "next-auth/client";
import NProgress from "nprogress";

import type { AppProps } from "next/app";

import "@fontsource/montserrat";
import "@fontsource/overpass";

import "../styles/globals.css";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
    };
    const handleStop = () => {
      setIsLoading(false);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <AuthProvider session={pageProps.session}>
      <Component {...pageProps} />
      {isLoading && <Loading />}
    </AuthProvider>
  );
}

export default MyApp;
