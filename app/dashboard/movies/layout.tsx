import Navbar from "./_components/Navbar";

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Navbar />
      {children}
    </div>
  );
}
