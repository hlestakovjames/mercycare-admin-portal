"use client";

import { useState } from "react";
import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminTopbar from "@/components/layout/AdminTopbar";

type AdminShellProps = {
  children: React.ReactNode;
};

export default function AdminShell({
  children,
}: AdminShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F7FA] lg:flex">
      <AdminSidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div className="min-w-0 flex-1">
        <AdminTopbar onMenuClick={() => setMobileOpen(true)} />

        <main className="mx-auto w-full max-w-[1700px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
