import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "01qv31nl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function checkContent() {
  const homepage = await client.fetch(`*[_type == "homepage"][0]`);
  const contactInfo = await client.fetch(`*[_type == "contactInfo"][0]`);
  const aboutPage = await client.fetch(`*[_type == "aboutPage"][0]`);
  const navigation = await client.fetch(`*[_type == "navigation"][0]`);
  const services = await client.fetch(`*[_type == "service"]`);
  const projects = await client.fetch(`*[_type == "project"]`);
  const tools = await client.fetch(`*[_type == "tool"]`);

  console.log("HOMEPAGE:", JSON.stringify(homepage, null, 2));
  console.log("\nCONTACT INFO:", JSON.stringify(contactInfo, null, 2));
  console.log("\nABOUT PAGE:", JSON.stringify(aboutPage, null, 2));
  console.log("\nNAVIGATION:", JSON.stringify(navigation, null, 2));
  console.log("\nSERVICES:", JSON.stringify(services, null, 2));
  console.log("\nPROJECTS:", JSON.stringify(projects, null, 2));
  console.log("\nTOOLS:", JSON.stringify(tools, null, 2));
}

checkContent().catch(console.error);
