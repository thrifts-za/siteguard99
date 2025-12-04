import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { safeFetch } from "@/sanity/client";
import { siteSettingsQuery } from "@/sanity/queries";
import { SiteSettings } from "@/types/sanity";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Default metadata
const defaultMetadata: Metadata = {
  title: "The WordPress Team - Design as a Subscription",
  description: "The #1 design subscription service for agencies, startups, and entrepreneurs.",
  openGraph: {
    title: "The WordPress Team - Design as a Subscription",
    description: "The #1 design subscription service for agencies, startups, and entrepreneurs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The WordPress Team - Design as a Subscription",
    description: "The #1 design subscription service for agencies, startups, and entrepreneurs.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await safeFetch<SiteSettings>(siteSettingsQuery);

  if (!settings) {
    return defaultMetadata;
  }

  const seo = settings.seo;
  const siteName = settings.siteName || "The WordPress Team";
  const title = seo?.metaTitle || `${siteName} - Design as a Subscription`;
  const description = seo?.metaDescription || (defaultMetadata.description as string);

  // Build robots directive
  const robotsDirectives: string[] = [];
  if (seo?.robotsNoIndex) robotsDirectives.push("noindex");
  if (seo?.robotsNoFollow) robotsDirectives.push("nofollow");
  const robots = robotsDirectives.length > 0 ? robotsDirectives.join(", ") : "index, follow";

  // Build icons array
  const iconsList: Array<{ url: string; sizes?: string; type?: string }> = [];
  if (settings.faviconUrl) {
    iconsList.push({ url: settings.faviconUrl });
  }
  if (settings.favicon16Url) {
    iconsList.push({ url: settings.favicon16Url, sizes: "16x16", type: "image/png" });
  }
  if (settings.favicon32Url) {
    iconsList.push({ url: settings.favicon32Url, sizes: "32x32", type: "image/png" });
  }

  const icons: Metadata["icons"] = {
    ...(iconsList.length > 0 && { icon: iconsList }),
    ...(settings.appleTouchIconUrl && { apple: [{ url: settings.appleTouchIconUrl, sizes: "180x180" }] }),
  };

  return {
    title,
    description,
    keywords: seo?.metaKeywords?.join(", "),
    robots,
    ...(seo?.canonicalUrl && { alternates: { canonical: seo.canonicalUrl } }),
    icons,
    ...(settings.themeColor && { themeColor: settings.themeColor }),
    openGraph: {
      title: seo?.ogTitle || title,
      description: seo?.ogDescription || description,
      type: (seo?.ogType as "website" | "article") || "website",
      siteName,
      ...(settings.siteUrl && { url: settings.siteUrl }),
      ...(seo?.ogImageUrl && {
        images: [{ url: seo.ogImageUrl, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: seo?.twitterCard || "summary_large_image",
      title: seo?.twitterTitle || seo?.ogTitle || title,
      description: seo?.twitterDescription || seo?.ogDescription || description,
      ...(seo?.twitterSite && { site: seo.twitterSite }),
      ...(seo?.twitterCreator && { creator: seo.twitterCreator }),
      ...((seo?.twitterImageUrl || seo?.ogImageUrl) && {
        images: [seo.twitterImageUrl || seo.ogImageUrl!],
      }),
    },
    other: {
      ...(settings.msapplicationTileColor && { "msapplication-TileColor": settings.msapplicationTileColor }),
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await safeFetch<SiteSettings>(siteSettingsQuery);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon links that can't be set via metadata */}
        {settings?.faviconSvgUrl && (
          <link rel="icon" type="image/svg+xml" href={settings.faviconSvgUrl} />
        )}
        {settings?.maskIconUrl && (
          <link
            rel="mask-icon"
            href={settings.maskIconUrl}
            color={settings.maskIconColor || "#5bbad5"}
          />
        )}
        {settings?.androidChrome192Url && (
          <link rel="icon" type="image/png" sizes="192x192" href={settings.androidChrome192Url} />
        )}
        {settings?.androidChrome512Url && (
          <link rel="icon" type="image/png" sizes="512x512" href={settings.androidChrome512Url} />
        )}

        {/* Google Analytics */}
        {settings?.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${settings.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}

        {/* Google Tag Manager - Head */}
        {settings?.googleTagManagerId && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${settings.googleTagManagerId}');
            `}
          </Script>
        )}

        {/* Facebook Pixel */}
        {settings?.facebookPixelId && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${settings.facebookPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Hotjar */}
        {settings?.hotjarId && (
          <Script id="hotjar" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${settings.hotjarId},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}

        {/* Microsoft Clarity */}
        {settings?.clarityId && (
          <Script id="clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${settings.clarityId}");
            `}
          </Script>
        )}

        {/* Custom Head Scripts */}
        {settings?.customHeadScripts && (
          <div dangerouslySetInnerHTML={{ __html: settings.customHeadScripts }} />
        )}
      </head>
      <body className={`${figtree.variable} font-sans antialiased`}>
        {/* Google Tag Manager - Body (noscript) */}
        {settings?.googleTagManagerId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${settings.googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {/* Custom Body Start Scripts */}
        {settings?.customBodyStartScripts && (
          <div dangerouslySetInnerHTML={{ __html: settings.customBodyStartScripts }} />
        )}

        {children}

        {/* Custom Body End Scripts */}
        {settings?.customBodyEndScripts && (
          <div dangerouslySetInnerHTML={{ __html: settings.customBodyEndScripts }} />
        )}
      </body>
    </html>
  );
}
