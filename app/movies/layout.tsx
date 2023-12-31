import Navbar from "./_components/Navbar";

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:pt-4 lg:pl-10">
        <Navbar />
      {children}
    </div>
  );
}
