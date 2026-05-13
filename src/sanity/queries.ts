import { groq } from "next-sanity";
import { client } from "./client";

export const homepageQuery = groq`{
  "homepage": *[_type == "homepage"][0] {
    ...,
    "heroDesktopUrl": heroDesktop.video.asset->url,
    "heroDesktopImage": heroDesktop.image.asset->url,
    "heroMobileUrl": heroMobile.video.asset->url,
    "heroMobileImage": heroMobile.image.asset->url,
    "seo": seo {
      ...,
      "ogImageUrl": ogImage.asset->url
    },
    introParagraph[] {
      ...,
      markDefs[] {
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "type": @.reference->_type
        }
      }
    }
  },
  "siteSettings": *[_type == "siteSettings"][0],
  "navigation": *[_type == "navigation"][0],
  "contactInfo": *[_type == "contactInfo"][0] {
    ...,
    "logoUrl": logo.asset->url
  },
  "services": *[_type == "service"] | order(order asc) {
    ...,
    "imageUrl": image.asset->url
  },
  "projects": *[_type == "project"] | order(order asc) {
    ...,
    "image": image.asset->url
  },
  "aboutPage": *[_type == "aboutPage"][0] {
    ...,
    "marqueeImageUrls": marqueeImages[].asset->url,
    "bannerVideoUrl": bannerVideo.asset->url
  }
}`;

export async function getHomepageData() {
  // Add revalidate: 0 to bypass Next.js cache during development while tweaking CMS
  return client.fetch(homepageQuery, {}, { next: { revalidate: 0 } });
}

export async function getAboutPageData() {
  const query = groq`*[_type == "aboutPage"][0] {
    ...,
    "marqueeImageUrls": marqueeImages[].asset->url,
    "bannerVideoUrl": bannerVideo.asset->url,
    "seo": seo {
      ...,
      "ogImageUrl": ogImage.asset->url
    }
  }`;
  return client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getServicesData() {
  const query = groq`{
    "pageSettings": *[_type == "servicesPage"][0] {
      ...,
      "seo": seo {
        ...,
        "ogImageUrl": ogImage.asset->url
      }
    },
    "services": *[_type == "service"] | order(order asc) {
      ...,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      "seo": seo {
        ...,
        "ogImageUrl": ogImage.asset->url
      }
    }
  }`;
  return client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getProjectsData() {
  const query = groq`{
    "pageSettings": *[_type == "projectsPage"][0] {
      ...,
      "seo": seo {
        ...,
        "ogImageUrl": ogImage.asset->url
      }
    },
    "projects": *[_type == "project"] | order(order asc) {
      ...,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      "seo": seo {
        ...,
        "ogImageUrl": ogImage.asset->url
      }
    }
  }`;
  return client.fetch(query, {}, { next: { revalidate: 0 } });
}
