import { getAboutPageData } from "@/sanity/queries";
import ClientAbout from "./ClientAbout";

export default async function AboutPage() {
  let data;
  try {
    data = await getAboutPageData();
  } catch (error) {
    console.error("Sanity fetch error in About page:", error);
    data = null;
  }

  return <ClientAbout data={data} />;
}
