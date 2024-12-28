"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);
  return (
    <main className="md:h-full flex items-center justify-center relative">
      {isLoading ? <SplashScreen /> : <>{children}</>}
    </main>
  );
}
