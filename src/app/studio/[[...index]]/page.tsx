"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config"; // Adjust path dynamically or just use root reference

// You might need to adjust the path depending on where your sanity.config.ts is. 
// Since it's in the root folder, four levels up from app/studio/[[...index]]/page.tsx:
export default function StudioPage() {
  return <NextStudio config={config} />;
}
