export function MovieSkeleton() {
  return (
    <div className={`my-5 mx-auto md:w-max space-y-3`}>
      <div className="shimmer rounded-lg p-3 bg-slate-200 border-none h-[600px] w-[600px]"></div>
      <div className="w-max mx-auto">
        <div className="flex gap-1 items-center mb-1">
          <div className="h-5 w-20  bg-slate-200 shimmer"></div>
          <div className="h-4 w-20  bg-slate-200 shimmer"></div>
        </div>
        <div className="flex gap-1 items-center mb-1">
          <div className="h-5 w-20  bg-slate-200 shimmer"></div>
          <div className="h-4 w-20  bg-slate-200 shimmer"></div>
        </div>
        <div className="flex gap-1 items-center mb-1">
          <div className="h-5 w-20  bg-slate-200 shimmer"></div>
          <div className="h-4 w-20  bg-slate-200 shimmer"></div>
        </div>
      </div>
      <div className="mx-auto flex justify-between mt-3">
        <div className="bg-slate-100 rounded-lg px-5 py-3 w-20 h-4 shimmer"></div>
        <div className="bg-slate-100 rounded-lg px-5 py-3 w-20 h-4 shimmer"></div>
      </div>
    </div>
  );
}
