import { DarkMode } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { FC } from "react";
import "../components/bufferFill";
import { Providers } from "../components/Providers";

// Use require instead of import since order matters
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </Providers>
  );
};

export default App;
