import { GTM_ID } from "@/services/gtm";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="google-tag-manager"
            />
          </noscript>
        ) : null}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
