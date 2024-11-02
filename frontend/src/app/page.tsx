import { Button } from "@/components/ui/button";

// Getting Strapi Data
const getStrapiData = async (url: string) => {
  const baseUrl = "http://localhost:1337";
  try {
    const res = await fetch(baseUrl + url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  const { title, description } = strapiData.data;
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
      <Button className="mt-4">Click Me!</Button>
    </main>
  );
}
