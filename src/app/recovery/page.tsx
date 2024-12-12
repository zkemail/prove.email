"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function RecoveryPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const redirect = async () => {
      await router.replace("https://recovery.zk.email");
      setIsLoading(false);
    };
    redirect();
  }, [router]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "100vw",
      }}
    >
      {isLoading && (
        <p>
          Redirecting to{" "}
          <a
            href="https://recovery.zk.email"
            style={{ textDecoration: "underline" }}
          >
            https://recovery.zk.email
          </a>
          ...
        </p>
      )}
    </div>
  );
}
