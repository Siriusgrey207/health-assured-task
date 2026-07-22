export default function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-md text-muted my-3 mb-0:last-child mt-0:first-child">
      {text}
    </p>
  );
}
