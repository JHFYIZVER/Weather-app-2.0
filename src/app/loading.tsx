import { Skeleton } from "@/shared/ui/skeleton";
import Header from "@/widget/header/ui/header";
import React from "react";

const Loading = () => {
  return (
    <>
      <Header />
      <main className="w-full h-svh">
        <div className="max-w-[1110px] w-full mx-auto p-5">
          <div className="flex w-full flex-wrap gap-4 lg:flex-nowrap">
            <Skeleton className="max-w-lg w-full" />
            <div className="grid w-full gap-4 grid-cols-2 content-center lg:max-w-[302px]">
              <Skeleton className="h-44 max-w-none w-full lg:p-2 lg:max-w-46 xl:p-6" />
              <Skeleton className="h-44 max-w-none w-full lg:p-2 lg:max-w-46 xl:p-6" />
              <Skeleton className="h-44 max-w-none w-full lg:p-2 lg:max-w-46 xl:p-6" />
              <Skeleton className="h-44 max-w-none w-full lg:p-2 lg:max-w-46 xl:p-6" />
            </div>
            <Skeleton className="flex flex-col w-full lg:max-w-56 p-6" />
          </div>
          <div className="flex flex-wrap gap-4 mt-4 lg:flex-nowrap">
            <div className="flex flex-col gap-4 max-w-lg w-full">
              <Skeleton className="flex max-w-lg h-44 flex-row-reverse justify-between" />
              <Skeleton className="flex max-w-lg h-44 flex-row-reverse justify-between" />
            </div>
            <Skeleton className="flex flex-col max-w-2xl w-full rounded-xl" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Loading;
