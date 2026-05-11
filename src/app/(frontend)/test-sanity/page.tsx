import { getProjectsData } from "@/sanity/queries";

export default async function TestSanityPage() {
  const projects = await getProjectsData();

  return (
    <div style={{ padding: "50px", background: "white", color: "black" }}>
      <h1>Sanity Data Debug</h1>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
      <hr />
      {projects.map((p: any) => (
        <div key={p._id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>{p.title}</h3>
          <p>ImageUrl from query: {p.imageUrl || "NULL"}</p>
          <img 
            src={p.imageUrl} 
            alt="from query" 
            style={{ width: "200px", border: "2px solid red" }} 
          />
        </div>
      ))}
    </div>
  );
}
