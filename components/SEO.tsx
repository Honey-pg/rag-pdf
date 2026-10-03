import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

export default function SEO({ 
  title, 
  description = "Interactive Retrieval Augmented Generation with PDFs",
  image = "/og-image.png"
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
