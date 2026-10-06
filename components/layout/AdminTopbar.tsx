"use client";

import {
  Bell,
  Menu,
  Search,
  ShieldCheck,
} from "lucide-react";

type AdminTopbarProps = {
  onMenuClick: () => void;
};

export default function AdminTopbar({
  onMenuClick,
}: AdminTopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex h-[76px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden max-w-xl flex-1 md:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              placeholder="Search administration..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#0EA5C6] focus:bg-white focus:ring-2 focus:ring-[#0EA5C6]/10"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            disabled
            aria-label="Notifications"
            className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#D4AF37]" />
          </button>

          <div className="hidden h-9 w-px bg-slate-200 sm:block" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7FA] text-[#0E8EAF]">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold text-[#0B1B3A]">
                Demo Administrator
              </p>
              <p className="text-xs text-slate-500">
                System Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
