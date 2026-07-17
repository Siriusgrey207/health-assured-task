export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-5xl mx-auto px-5 py-10">{children}</div>;
}
