import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "01qv31nl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "skJie1A2lEsdihhMpZj6exZBnVelxU9aWvrGr5VzjQnjTAp6MEl6f9fFp1o7fetbwnx9Ud07Vli1FAk2vr1TaLPJaWJQ9H2KQk4glNJp7QyBBBRVBGJ26YVM1fdlKFSoFf7owgG1Z3wih3khUTjTswzruwjsayYLH9GQjQc12k6v3uB6FGob",
});

async function checkContent() {
  const ids = ["homepage", "navigation", "contactInfo", "aboutPage"];
  const docs = await client.fetch(`*[_id in $ids]`, { ids });
  console.log("DOCS BY ID:", JSON.stringify(docs, null, 2));

  const allTypes = await client.fetch(`*`);
  const allProjects = await client.fetch(`*[_type == "project"]{title, "url": image.asset->url}`);
  console.log("PROJECT IMAGES:", JSON.stringify(allProjects, null, 2));
}

checkContent().catch(console.error);
