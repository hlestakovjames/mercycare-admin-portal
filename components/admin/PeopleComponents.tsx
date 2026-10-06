import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Search,
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

export function PeopleStat({
  label,
  value,
  detail,
  note,
  icon: Icon,
}: {
  label: string;
  value: string;
  detail?: string;
  note?: string;
  icon: typeof UserRound;
}) {
  const supportingText = detail ?? note ?? "";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-[#0B1B3A]">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {supportingText}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

export function SearchBar({
  placeholder = "Search records...",
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

export function StatusBadge({
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
  if (tone === "red") return <CircleAlert size={15} />;
  return <ShieldCheck size={15} />;
}

function PersonIdentity({
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
          <p className="truncate text-xs text-slate-500">
            {secondary}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function LocationText({
  location,
  compact = false,
}: {
  location: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-slate-500 ${
        compact ? "text-xs" : "text-sm"
      }`}
    >
      <MapPin size={14} className="shrink-0" />
      <span>{location}</span>
    </span>
  );
}

export function PersonRow({
  name,
  secondary,
  email,
  phone,
  status,
  statusTone = "slate",
  role,
  category,
  location,
  meta,
  href,
}: {
  name: string;
  secondary?: string;
  email?: string;
  phone?: string;
  status: string;
  statusTone?: StatusTone;
  role?: string;
  category?: string;
  location?: string;
  meta?: string;
  href?: string;
}) {
  return (
    <tr className="border-b border-slate-100 last:border-b-0">
      <td className="px-5 py-4 align-middle">
        <PersonIdentity
          name={name}
          secondary={secondary}
        />
      </td>

      <td className="px-5 py-4 align-middle">
        {email ? (
          <span className="inline-flex max-w-[220px] items-center gap-2 truncate text-sm text-slate-600">
            <Mail size={14} className="shrink-0 text-slate-400" />
            <span className="truncate">{email}</span>
          </span>
        ) : category ? (
          <span className="text-sm text-slate-600">
            {category}
          </span>
        ) : (
          <span className="text-sm text-slate-400">—</span>
        )}
      </td>

      <td className="px-5 py-4 align-middle">
        {phone ? (
          <span className="inline-flex items-center gap-2 text-sm text-slate-600">
            <Phone size={14} className="shrink-0 text-slate-400" />
            {phone}
          </span>
        ) : location ? (
          <LocationText
            location={location}
            compact
          />
        ) : (
          <span className="text-sm text-slate-400">—</span>
        )}
      </td>

      <td className="px-5 py-4 align-middle">
        <span className="inline-flex items-center gap-1.5">
          <StatusIcon tone={statusTone} />

          <StatusBadge
            label={status}
            tone={statusTone}
          />
        </span>
      </td>

      <td className="px-5 py-4 align-middle text-sm text-slate-600">
        {role ?? meta ?? "—"}
      </td>

      <td className="px-5 py-4 align-middle">
        {href ? (
          <a
            href={href}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-[#0B1B3A] transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
          >
            View
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="text-sm text-slate-400">—</span>
        )}
      </td>
    </tr>
  );
}

export function PersonTable({
  columns,
  children,
}: {
  columns: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
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
