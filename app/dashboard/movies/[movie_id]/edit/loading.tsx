import React from "react";

const LoadingUI = () => {
  return (
    <div className=" max-w-screen w-20 h-10 mx-auto py-10">
      <div className="bg-slate-100 p-5 space-y-3 rounded-lg mx-auto w-max">
        <div className="flex gap-2">
          <div className="mr-2 w-5 h-2"></div>
          <div className="rounded p-1 w-5 h-2 bg-slate-200"></div>
        </div>

        <div className="flex gap-2">
          <div className="mr-2 w-5 h-2"></div>
          <div className="rounded p-1 w-5 h-2 bg-slate-200"></div>
        </div>

        <div className="flex gap-2">
          <div className="mr-2 w-5 h-2"></div>
          <div className="rounded p-1 w-5 h-2 bg-slate-200"></div>
        </div>

        <div className="flex gap-2">
          <div className="mr-2 w-5 h-2"></div>
          <div className="rounded p-1 w-5 h-2 bg-slate-200"></div>
        </div>
        <div className="flex gap-2">
          <div className="mr-2 w-5 h-2"></div>
          <div className="rounded p-1 w-5 h-2 bg-slate-200"></div>
        </div>
        <div className="flex justify-center">
          <div className="mt-6 flex justify-end gap-4">
            <div className="flex h-10 items-center rounded-lg bg-slate-200 px-4"></div>
            <div className="bg-slate-200 px-5 py-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingUI;
