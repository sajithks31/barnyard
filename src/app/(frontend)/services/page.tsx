import { getServicesData } from "@/sanity/queries";
import ClientServices from "./ClientServices";

export default async function ServicesPage() {
  let data;
  try {
    data = await getServicesData();
  } catch (error) {
    console.error("Sanity fetch error in Services page:", error);
    data = null;
  }

  return <ClientServices data={data} />;
}
