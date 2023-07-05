import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <h2>Spotlight Piece</h2>
      <Image
        priority
        src={image}
        alt="Spotlight Art Piece"
        width={400}
        height={300}
      />
      <p>Artist: {artist}</p>
    </div>
  );
}
