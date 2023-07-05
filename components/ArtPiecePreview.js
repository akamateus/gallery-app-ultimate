import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image priority src={image} alt={title} width={300} height={200} />
      <h2>{title}</h2>
      <p>by {artist}</p>
    </div>
  );
}
