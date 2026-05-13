"use client";

import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log(error.digest);
  }, [error]);

  const handleClick = () => {
    console.log(reset);
    router.refresh(); // 内部重新调用home/page.tsx
    startTransition(reset);
  };

  return (
    <div>
      <h2>home error!!!</h2>
      <button onClick={handleClick}>try again</button>
    </div>
  );
}
