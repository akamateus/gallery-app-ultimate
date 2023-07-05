import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: artPieces, error } = useSWR(URL, fetcher);

  if (error) {
    return <div>Failed to load art pieces ❌ </div>;
  }

  if (!artPieces) {
    return <div>Loading🔃</div>;
  }

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
