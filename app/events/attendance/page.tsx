import { CheckCircle2, ClipboardCheck, Clock3, Users } from "lucide-react";
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

const attendance = [
  {
    person: "Grace Achieng",
    registration: "REG-00421",
    event: "Community Health & Wellness Day",
    status: "Expected",
  },
  {
    person: "Brian Otieno",
    registration: "REG-00420",
    event: "Community Health & Wellness Day",
    status: "Expected",
  },
  {
    person: "Samuel Ochieng",
    registration: "REG-00418",
    event: "Tuko Pamoja Senior Wellness Session",
    status: "Expected",
  },
  {
    person: "Jane Atieno",
    registration: "REG-00397",
    event: "Health Awareness Outreach",
    status: "Attended",
  },
];

export default function AttendancePage() {
  return (
    <AdminPage
      eyebrow="Events & Activities"
      title="Attendance"
      description="Track participant attendance across events and community activities."
      icon={ClipboardCheck}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <EventStat
          label="Attendance Records"
          value="214"
          icon={ClipboardCheck}
        />
        <EventStat
          label="Attended"
          value="188"
          icon={CheckCircle2}
          tone="green"
        />
        <EventStat
          label="Expected"
          value="26"
          icon={Clock3}
          tone="gold"
        />
        <EventStat
          label="Tracked Events"
          value="11"
          icon={Users}
          tone="slate"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <EventSearch placeholder="Search attendance records..." />
      </section>

      <EventTable
        headers={[
          "Participant",
          "Registration",
          "Event",
          "Attendance",
          "",
        ]}
      >
        {attendance.map((record) => (
          <tr key={record.registration} className="hover:bg-slate-50">
            <td className="px-5 py-4">
              <EventPerson name={record.person} />
            </td>
            <td className="px-5 py-4">
              <span className="text-sm font-semibold text-[#0E8EAF]">
                {record.registration}
              </span>
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {record.event}
            </td>
            <td className="px-5 py-4">
              <EventStatusCell status={record.status} />
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
