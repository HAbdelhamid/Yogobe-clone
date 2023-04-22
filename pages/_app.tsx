import "../styles/globals.css";
import { AppProps } from "next/app";
import client from "../gql/apolloclient";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
