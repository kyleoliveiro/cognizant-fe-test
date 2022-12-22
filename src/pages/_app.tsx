import { type AppType } from "next/dist/shared/lib/utils";
import "@fontsource/epilogue/500.css"
import "@fontsource/epilogue/700.css"
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
