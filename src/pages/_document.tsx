import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollSnapType: "y mandatory" }}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
