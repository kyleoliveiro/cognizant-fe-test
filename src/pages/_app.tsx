import "@fontsource/epilogue/500.css";
import "@fontsource/epilogue/700.css";
import { type AppType } from "next/dist/shared/lib/utils";
import AppHeader from "../components/AppHeader";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <AppHeader />
      </div>
      <div className="mt-20">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
