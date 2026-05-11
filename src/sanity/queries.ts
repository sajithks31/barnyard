import { groq } from "next-sanity";
import { client } from "./client";

export const homepageQuery = groq`{
  "homepage": *[_type == "homepage"][0] {
    ...,
    "heroVideoUrl": heroVideo.asset->url
  },
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
    "imageUrl": image.asset->url
  },
  "tools": *[_type == "tool"] | order(order asc) {
    ...,
    "imageUrl": image.asset->url
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
    "bannerVideoUrl": bannerVideo.asset->url
  }`;
  return client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getServicesData() {
  const query = groq`*[_type == "service"] | order(order asc) {
    ...,
    "imageUrl": image.asset->url
  }`;
  return client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getProjectsData() {
  const query = groq`*[_type == "project"] | order(order asc) {
    ...,
    "imageUrl": image.asset->url
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
  return data;
}
