const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function MovieSkeleton() {
  return (
    <div className={`${shimmer} my-5 mx-auto w-max space-y-3`}>
      <div className="rounded-lg p-3 bg-slate-100 border-none h-[600px] w-[600px]"></div>
      <div className="w-max mx-auto">
        <div className="flex gap-1 items-center mb-1">
          <div className="h-5 w-20  bg-slate-100"></div>
          <div className="h-4 w-20  bg-slate-100"></div>
        </div>
        <div className="flex gap-1 items-center mb-1">
          <div className="h-5 w-20  bg-slate-100"></div>
          <div className="h-4 w-20  bg-slate-100"></div>
        </div>
        <div className="flex gap-1 items-center mb-1">
          <div className="h-5 w-20  bg-slate-100"></div>
          <div className="h-4 w-20  bg-slate-100"></div>
        </div>
      </div>
      <div className="mx-auto flex justify-between mt-3">
        <div className="bg-slate-100 rounded-lg px-5 py-3 w-20 h-4"></div>
        <div className="bg-slate-100 rounded-lg px-5 py-3 w-20 h-4"></div>
      </div>
    </div>
  );
}
