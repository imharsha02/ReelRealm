import Navbar from "./_components/Navbar";

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-4 w-full pl-10">
        <Navbar />
      {children}
    </div>
  );
}
