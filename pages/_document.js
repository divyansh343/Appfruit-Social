import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />

<script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7807770989806387`}
     crossOrigin="anonymous"></script>

                    <script strategy="lazyOnload" async src={`https://www.googletagmanager.com/gtag/js?id=G-ZX1S3FS4P4`}></script>
                    <script strategy="lazyOnload">
                      {`window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-ZX1S3FS4P4',{
                        page_path: window.location.pathname,
                      });`}
                    </script>
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7807770989806387"
     crossOrigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7807770989806387"
     crossOrigin="anonymous"></script>
<ins className="adsbygoogle"
     style={{display:"block"}}
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7807770989806387"
     data-ad-slot="7005513319"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
                </body>
            </Html>
        )
    }
}

export default MyDocument