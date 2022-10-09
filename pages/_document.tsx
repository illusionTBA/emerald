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
	          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* injecting proxy scripts */}
        <Script src="/proxies/uv/uv.bundle.js" strategy="beforeInteractive" />
        <Script src="/proxies/uv/uv.config.js" strategy="beforeInteractive" />
        <Script src="/proxies/dip/dip.config.js" strategy="beforeInteractive" />
        <Script src="/proxies/dip/dip.page.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
export default Document;
