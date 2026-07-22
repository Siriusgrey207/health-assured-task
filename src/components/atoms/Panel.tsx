export default function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary-background shadow-md p-5 rounded-xl">
      {children}
    </div>
  );
}
