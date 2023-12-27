export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <div className='pt-4 w-full pl-10'>{children}</div>
    </div>
  );
}