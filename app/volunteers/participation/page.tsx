import { Activity, CheckCircle2, Users, CalendarDays } from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  VolunteerAction,
  VolunteerPerson,
  VolunteerSearch,
  VolunteerStat,
  VolunteerStatusCell,
  VolunteerTable,
} from "@/components/admin/VolunteerComponents";

const participation = [
  {
    volunteer: "Brian Otieno",
    activity: "Community Health & Wellness Day",
    date: "17 Oct 2026",
    hours: "6 hrs",
    status: "Confirmed",
  },
  {
    volunteer: "Mary Akinyi",
    activity: "Senior Wellness Support Visit",
    date: "12 Oct 2026",
    hours: "4 hrs",
    status: "Confirmed",
  },
  {
    volunteer: "Peter Ouma",
    activity: "Health Awareness Outreach",
    date: "29 Sep 2026",
    hours: "5 hrs",
    status: "Completed",
  },
  {
    volunteer: "Amina Hassan",
    activity: "Family Caregiver Support Circle",
    date: "23 Oct 2026",
    hours: "3 hrs",
    status: "Planned",
  },
];

export default function VolunteerParticipationPage() {
  return (
    <AdminPage
      eyebrow="Volunteers"
      title="Participation"
      description="Track volunteer involvement and contribution across MercyCare activities."
      icon={Activity}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <VolunteerStat label="Participation Records" value="126" icon={Activity} />
        <VolunteerStat
          label="Completed"
          value="94"
          icon={CheckCircle2}
          tone="green"
        />
        <VolunteerStat
          label="Volunteers Active"
          value="31"
          icon={Users}
          tone="cyan"
        />
        <VolunteerStat
          label="Upcoming"
          value="32"
          icon={CalendarDays}
          tone="gold"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <VolunteerSearch placeholder="Search participation records..." />
      </section>

      <VolunteerTable
        headers={[
          "Volunteer",
          "Activity",
          "Date",
          "Contribution",
          "Status",
          "",
        ]}
      >
        {participation.map((record) => (
          <tr
            key={`${record.volunteer}-${record.activity}`}
            className="hover:bg-slate-50"
          >
            <td className="px-5 py-4">
              <VolunteerPerson name={record.volunteer} />
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {record.activity}
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {record.date}
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {record.hours}
            </td>
            <td className="px-5 py-4">
              <VolunteerStatusCell status={record.status} />
            </td>
            <td className="px-5 py-4 text-right">
              <VolunteerAction>View</VolunteerAction>
            </td>
          </tr>
        ))}
      </VolunteerTable>
    </AdminPage>
  );
}
