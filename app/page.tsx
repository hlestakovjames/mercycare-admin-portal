import {
  Activity,
  CalendarDays,
  ClipboardList,
  HeartPulse,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold text-[#0E8EAF]">
          MercyCare Administration
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#0B1B3A] sm:text-3xl">
          Administrative Dashboard
        </h1>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
          Manage MercyCare operations, people, services, communications,
          events and organisational activities from one administration
          workspace.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        <SummaryCard
          icon={Users}
          label="People"
          value="248"
          note="Registered records"
        />
        <SummaryCard
          icon={HeartPulse}
          label="Active Services"
          value="36"
          note="Currently active"
        />
        <SummaryCard
          icon={ClipboardList}
          label="Open Requests"
          value="12"
          note="Awaiting action"
        />
        <SummaryCard
          icon={CalendarDays}
          label="Upcoming Events"
          value="5"
          note="Next 30 days"
        />
        <SummaryCard
          icon={Activity}
          label="Activities"
          value="18"
          note="Recent activities"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="text-base font-bold text-[#0B1B3A]">
              Recent Activity
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Latest operational activity across MercyCare.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            <ActivityRow
              title="New service request received"
              description="Home care enquiry submitted by a registered user."
              time="18 minutes ago"
            />
            <ActivityRow
              title="Community Wellness Day registration"
              description="New participant registration recorded."
              time="1 hour ago"
            />
            <ActivityRow
              title="Volunteer application received"
              description="New volunteer application is awaiting review."
              time="3 hours ago"
            />
            <ActivityRow
              title="Donation recorded"
              description="Community Wellness campaign received new support."
              time="5 hours ago"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="text-base font-bold text-[#0B1B3A]">
              Attention Required
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Items requiring administrative follow-up.
            </p>
          </div>

          <div className="space-y-3 p-5 sm:p-6">
            <AttentionItem
              label="Service requests"
              value="12"
              tone="cyan"
            />
            <AttentionItem
              label="Volunteer applications"
              value="4"
              tone="gold"
            />
            <AttentionItem
              label="Open enquiries"
              value="7"
              tone="cyan"
            />
            <AttentionItem
              label="Pending registrations"
              value="9"
              tone="gold"
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-[#D4AF37]/30 bg-[#FFFCF2] p-5 sm:p-6">
        <p className="text-sm font-bold text-[#0B1B3A]">
          Development preview
        </p>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
          This administrative portal is currently operating with demonstration
          data. Live records, authentication, permissions, audit logs and
          backend workflows will be connected during backend development.
        </p>

        <span className="mt-4 inline-flex rounded-full bg-[#D4AF37]/15 px-3 py-1.5 text-xs font-bold text-[#8A6A00]">
          Demo Mode
        </span>
      </section>
    </div>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  note,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF7FA] text-[#0E8EAF]">
          <Icon className="h-5 w-5" />
        </div>

        <span className="text-2xl font-bold text-[#0B1B3A]">{value}</span>
      </div>

      <p className="mt-4 text-sm font-bold text-[#0B1B3A]">{label}</p>
      <p className="mt-1 text-xs text-slate-500">{note}</p>
    </div>
  );
}

function ActivityRow({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex gap-4 p-5 sm:p-6">
      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0EA5C6]" />

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-sm font-bold text-[#0B1B3A]">{title}</h3>
          <span className="text-xs text-slate-400">{time}</span>
        </div>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function AttentionItem({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "cyan" | "gold";
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
      <span className="text-sm font-medium text-slate-600">{label}</span>

      <span
        className={`rounded-full px-3 py-1 text-xs font-bold ${
          tone === "cyan"
            ? "bg-[#EAF7FA] text-[#0E8EAF]"
            : "bg-[#FFF8DF] text-[#8A6A00]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
