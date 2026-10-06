import {
  Activity,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function EventStat({
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

export function EventSearch({
  placeholder = "Search events...",
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

export function EventStatus({
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

export function EventPerson({
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

export function EventTable({
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

export function EventDate({
  date,
  time,
}: {
  date: string;
  time?: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#0E8EAF]" />
      <div>
        <p className="text-sm font-medium text-[#0B1B3A]">{date}</p>
        {time ? <p className="text-xs text-slate-500">{time}</p> : null}
      </div>
    </div>
  );
}

export function EventLocation({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
      <span className="text-sm text-slate-600">{children}</span>
    </div>
  );
}

export function EventAction({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="text-sm font-semibold text-[#0E8EAF] transition hover:text-[#0B7089]"
    >
      {children}
    </button>
  );
}

export function EventStatusCell({
  status,
}: {
  status: string;
}) {
  const tone =
    status === "Completed" || status === "Confirmed" || status === "Attended"
      ? "green"
      : status === "Upcoming" || status === "Planned"
        ? "cyan"
        : status === "Pending" || status === "Draft" || status === "Expected"
          ? "gold"
          : "slate";

  return <EventStatus tone={tone}>{status}</EventStatus>;
}

export function EventType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
      <Activity className="h-3.5 w-3.5 text-[#0E8EAF]" />
      {children}
    </span>
  );
}

export const eventIcons = {
  calendar: CalendarDays,
  activity: Activity,
  users: Users,
  clock: Clock3,
  check: CheckCircle2,
};
