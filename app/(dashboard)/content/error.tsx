"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="my-28 flex justify-center">
      <div className="flex-col">
        <p>Please try again now or later</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    </div>
  );
}