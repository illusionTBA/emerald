import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#2F3E46" />
        <link
          rel="shortcut icon"
          href="/images/emerald.png"
          type="image/x-icon"
        />
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5176377201640729"
     crossOrigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="/proxies/uv/uv.bundle.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/proxies/uv/uv.config.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
export default Document;
