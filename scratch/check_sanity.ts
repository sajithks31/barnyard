import { createClient } from "next-sanity";

const client = createClient({
  projectId: "01qv31nl",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-05-03",
});

async function checkProjects() {
  const projects = await client.fetch(`*[_type == "project"]`);
  console.log("PROJECTS FOUND:", projects.length);
  console.log(JSON.stringify(projects, null, 2));
}

checkProjects().catch(console.error);
