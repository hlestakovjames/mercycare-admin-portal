import {
  Activity,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Search,
  UserCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function VolunteerStat({
  label,
  value,
  icon: Icon,
  tone = "cyan",
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  tone?: "cyan" | "green" | "gold" | "slate";
}) {
  const tones = {
    cyan: "bg-[#EAF7FA] text-[#0E8EAF]",
    green: "bg-emerald-50 text-emerald-600",
    gold: "bg-amber-50 text-amber-600",
    slate: "bg-slate-100 text-slate-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-1 text-2xl font-bold text-[#0B1B3A]">{value}</p>
        </div>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${tones[tone]}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export function VolunteerSearch({
  placeholder = "Search volunteers...",
}: {
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        placeholder={placeholder}
        className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#0E8EAF] focus:ring-2 focus:ring-[#0E8EAF]/10"
      />
    </div>
  );
}

export function VolunteerStatus({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: "green" | "gold" | "cyan" | "red" | "slate";
}) {
  const tones = {
    green: "bg-emerald-50 text-emerald-700",
    gold: "bg-amber-50 text-amber-700",
    cyan: "bg-cyan-50 text-cyan-700",
    red: "bg-red-50 text-red-700",
    slate: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function VolunteerStatusCell({ status }: { status: string }) {
  const tone =
    status === "Active" ||
    status === "Approved" ||
    status === "Completed" ||
    status === "Assigned"
      ? "green"
      : status === "Pending" ||
          status === "Under Review" ||
          status === "Planned"
        ? "gold"
        : status === "Open" || status === "Available"
          ? "cyan"
          : "slate";

  return <VolunteerStatus tone={tone}>{status}</VolunteerStatus>;
}

export function VolunteerPerson({
  name,
  secondary,
}: {
  name: string;
  secondary?: string;
}) {
  return (
    <div>
      <p className="font-semibold text-[#0B1B3A]">{name}</p>
      {secondary ? (
        <p className="mt-0.5 text-xs text-slate-500">{secondary}</p>
      ) : null}
    </div>
  );
}

export function VolunteerTable({
  headers,
  children,
}: {
  headers: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">{children}</tbody>
        </table>
      </div>
    </div>
  );
}

export function VolunteerAction({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-sm font-semibold text-[#0E8EAF] transition hover:text-[#0B7089]"
    >
      {children}
    </button>
  );
}

export const volunteerIcons = {
  users: Users,
  applications: ClipboardList,
  opportunities: Activity,
  assignments: UserCheck,
  participation: CheckCircle2,
  pending: Clock3,
};
