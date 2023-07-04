import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}
