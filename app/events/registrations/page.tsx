import { ClipboardList, CheckCircle2, Clock3, Users } from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  EventAction,
  EventDate,
  EventPerson,
  EventSearch,
  EventStat,
  EventStatusCell,
  EventTable,
} from "@/components/admin/EventComponents";

const registrations = [
  {
    id: "REG-00421",
    person: "Grace Achieng",
    event: "Community Health & Wellness Day",
    date: "17 Oct 2026",
    status: "Confirmed",
  },
  {
    id: "REG-00420",
    person: "Brian Otieno",
    event: "Community Health & Wellness Day",
    date: "17 Oct 2026",
    status: "Confirmed",
  },
  {
    id: "REG-00418",
    person: "Samuel Ochieng",
    event: "Tuko Pamoja Senior Wellness Session",
    date: "24 Oct 2026",
    status: "Pending",
  },
  {
    id: "REG-00411",
    person: "Jane Atieno",
    event: "Mama na Mtoto Community Session",
    date: "31 Oct 2026",
    status: "Confirmed",
  },
];

export default function RegistrationsPage() {
  return (
    <AdminPage
      eyebrow="Events & Activities"
      title="Registrations"
      description="Review and manage registrations for MercyCare events."
      icon={ClipboardList}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <EventStat label="Total Registrations" value="105" icon={Users} />
        <EventStat
          label="Confirmed"
          value="91"
          icon={CheckCircle2}
          tone="green"
        />
        <EventStat label="Pending" value="14" icon={Clock3} tone="gold" />
        <EventStat label="Events" value="5" icon={ClipboardList} tone="slate" />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <EventSearch placeholder="Search registrations..." />
      </section>

      <EventTable
        headers={["Registration", "Participant", "Event", "Date", "Status", ""]}
      >
        {registrations.map((registration) => (
          <tr key={registration.id} className="hover:bg-slate-50">
            <td className="px-5 py-4">
              <span className="text-sm font-semibold text-[#0E8EAF]">
                {registration.id}
              </span>
            </td>
            <td className="px-5 py-4">
              <EventPerson name={registration.person} />
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {registration.event}
            </td>
            <td className="px-5 py-4">
              <EventDate date={registration.date} />
            </td>
            <td className="px-5 py-4">
              <EventStatusCell status={registration.status} />
            </td>
            <td className="px-5 py-4 text-right">
              <EventAction>View</EventAction>
            </td>
          </tr>
        ))}
      </EventTable>
    </AdminPage>
  );
}
