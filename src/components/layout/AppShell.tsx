import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="h-dvh w-full overflow-hidden bg-brand-black flex flex-col relative">
      {children}
    </div>
  );
}
