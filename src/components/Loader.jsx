import React from "react";

const Loader = () => {
  return (
    <div class="flex justify-center items-center min-h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
    </div>
  );
};

export default Loader;
