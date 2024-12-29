import { Suspense } from "react";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <div>{children}</div>
    </Suspense>
  );
}
