"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, X } from "lucide-react";
import { adminNavigation } from "@/components/navigation/adminNavigation";

type AdminSidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

export default function AdminSidebar({
  mobileOpen,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/45 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col bg-[#08162F] text-white transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[76px] items-center justify-between border-b border-white/10 px-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex min-w-0 items-center gap-3"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white">
              <Image
                src="/logo.png"
                alt="MercyCare"
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold">MercyCare</p>
              <p className="truncate text-[11px] text-slate-400">
                Administrative Portal
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="border-b border-white/10 px-5 py-4">
          <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8FE4F3]">
                Development
              </p>
              <p className="mt-0.5 text-xs text-slate-400">
                Administration preview
              </p>
            </div>

            <span className="rounded-full bg-[#D4AF37]/15 px-2 py-1 text-[10px] font-bold text-[#D4AF37]">
              Demo
            </span>
          </div>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
          {adminNavigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <div key={item.href}>
                {item.section && (
                  <p className="mb-2 mt-4 px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 first:mt-0">
                    {item.section}
                  </p>
                )}

                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-[#0EA5C6] text-white shadow-sm"
                      : "text-slate-300 hover:bg-white/7 hover:text-white"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px] shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs font-semibold text-white">
              Demo Administrator
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              Authentication will be connected with the shared backend.
            </p>

            <button
              type="button"
              disabled
              title="Authentication will be enabled during backend development."
              className="mt-3 flex w-full items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-semibold text-slate-500"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
