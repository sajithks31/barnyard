import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "01qv31nl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function checkContent() {
  const ids = ["homepage", "navigation", "contactInfo", "aboutPage"];
  const docs = await client.fetch(`*[_id in $ids]`, { ids });
  console.log("DOCS BY ID:", JSON.stringify(docs, null, 2));

  const allTypes = await client.fetch(`*`);
  console.log("ALL DOCUMENTS:", JSON.stringify(allTypes.map((d: any) => ({ id: d._id, type: d._type })), null, 2));
}

checkContent().catch(console.error);
