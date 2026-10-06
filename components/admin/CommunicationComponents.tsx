import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Clock3,
  Mail,
  Megaphone,
  MessageSquare,
  Search,
  Send,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type StatusTone = "cyan" | "gold" | "slate" | "red";

const statusStyles: Record<StatusTone, string> = {
  cyan: "bg-cyan-50 text-cyan-700 ring-cyan-200",
  gold: "bg-amber-50 text-amber-700 ring-amber-200",
  slate: "bg-slate-100 text-slate-700 ring-slate-200",
  red: "bg-red-50 text-red-700 ring-red-200",
};

export function CommunicationStat({
  label,
  value,
  note,
  icon: Icon,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof MessageSquare;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-[#0B1B3A]">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-500">{note}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

export function CommunicationSearch({
  placeholder = "Search...",
}: {
  placeholder?: string;
}) {
  return (
    <div className="relative w-full md:max-w-sm">
      <Search
        size={17}
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="search"
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
      />
    </div>
  );
}

export function CommunicationStatus({
  label,
  tone = "slate",
}: {
  label: string;
  tone?: StatusTone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[tone]}`}
    >
      {label}
    </span>
  );
}

function StatusIcon({ tone }: { tone: StatusTone }) {
  if (tone === "cyan") return <CheckCircle2 size={15} />;
  if (tone === "gold") return <Clock3 size={15} />;
  return <ShieldCheck size={15} />;
}

export function CommunicationPerson({
  name,
  secondary,
}: {
  name: string;
  secondary?: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B1B3A] text-white">
        <UserRound size={17} />
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-slate-800">
          {name}
        </p>

        {secondary ? (
          <p className="truncate text-xs text-slate-500">{secondary}</p>
        ) : null}
      </div>
    </div>
  );
}

export function CommunicationTable({
  columns,
  children,
}: {
  columns: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px]">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CommunicationStatusCell({
  label,
  tone,
}: {
  label: string;
  tone: StatusTone;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <StatusIcon tone={tone} />
      <CommunicationStatus label={label} tone={tone} />
    </span>
  );
}

export function CommunicationAction({
  href,
  label = "View",
}: {
  href: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-[#0B1B3A] transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
    >
      {label}
      <ArrowUpRight size={14} />
    </a>
  );
}

export function CommunicationChannel({
  channel,
}: {
  channel: "Email" | "WhatsApp" | "SMS" | "Portal";
}) {
  const icons = {
    Email: Mail,
    WhatsApp: MessageSquare,
    SMS: Send,
    Portal: Bell,
  };

  const Icon = icons[channel];

  return (
    <span className="inline-flex items-center gap-2 text-sm text-slate-600">
      <Icon size={15} className="text-slate-400" />
      {channel}
    </span>
  );
}

export function AnnouncementType({
  type,
}: {
  type: "General" | "Event" | "Service" | "Emergency";
}) {
  const icons = {
    General: Megaphone,
    Event: MessageSquare,
    Service: Bell,
    Emergency: ShieldCheck,
  };

  const Icon = icons[type];

  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
        <Icon size={16} />
      </span>
      {type}
    </span>
  );
}
