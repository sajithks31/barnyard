import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getHomepageData } from "@/sanity/queries";

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let data;
  try {
    data = await getHomepageData();
  } catch (error) {
    console.error("Sanity fetch error in layout:", error);
    data = null;
  }

  const contact = data?.contactInfo || {};
  const navLinks = data?.navigation?.menuItems;

  return (
    <>
      <Navbar data={{ navLinks, contactInfo: contact }} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer navLinks={navLinks} contactInfo={contact} />
    </>
  );
}
