"use client";

import Loader from "@/app/components/Loader";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
