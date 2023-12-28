import Navbar from "./_components/Navbar";

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:pt-4 w-full md:pl-10">
        <Navbar />
      {children}
    </div>
  );
}
