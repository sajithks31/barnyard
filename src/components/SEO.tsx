import Head from "next/head";

interface SEOProps {
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
    ogImageUrl?: string;
    noIndex?: boolean;
    schemaMarkup?: string;
  };
  siteSettings?: {
    siteTitle?: string;
    globalSchema?: string;
    googleSearchConsole?: string;
  };
  defaultTitle?: string;
  defaultDescription?: string;
}

export default function SEO({ seo, siteSettings, defaultTitle, defaultDescription }: SEOProps) {
  const title = seo?.title || defaultTitle || siteSettings?.siteTitle || "Barnyard Productions";
  const description = seo?.description || defaultDescription || "Creative-led production studio crafting cinematic video, photography, and visual content.";
  const canonical = seo?.canonical;
  const ogImage = seo?.ogImageUrl;
  const noIndex = seo?.noIndex;
  const gsc = siteSettings?.googleSearchConsole;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* OG Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}

        {canonical && <link rel="canonical" href={canonical} />}
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        {gsc && <meta name="google-site-verification" content={gsc} />}

        {/* Global Schema */}
        {siteSettings?.globalSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: siteSettings.globalSchema }}
          />
        )}

        {/* Page Specific Schema */}
        {seo?.schemaMarkup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: seo.schemaMarkup }}
          />
        )}
      </Head>
    </>
  );
}
