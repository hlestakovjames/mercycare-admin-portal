import { Activity, CalendarDays, Users, CheckCircle2 } from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  VolunteerAction,
  VolunteerSearch,
  VolunteerStat,
  VolunteerStatusCell,
  VolunteerTable,
} from "@/components/admin/VolunteerComponents";

const opportunities = [
  {
    name: "Community Outreach Volunteer",
    area: "Community Outreach",
    date: "26 Oct 2026",
    slots: "8 slots",
    status: "Open",
  },
  {
    name: "Senior Wellness Support",
    area: "Senior Support",
    date: "02 Nov 2026",
    slots: "6 slots",
    status: "Open",
  },
  {
    name: "Mama na Mtoto Support",
    area: "Family Support",
    date: "08 Nov 2026",
    slots: "10 slots",
    status: "Planned",
  },
  {
    name: "Health Camp Volunteer Team",
    area: "Health Awareness",
    date: "15 Nov 2026",
    slots: "12 slots",
    status: "Open",
  },
];

export default function VolunteerOpportunitiesPage() {
  return (
    <AdminPage
      eyebrow="Volunteers"
      title="Opportunities"
      description="Create and coordinate opportunities for volunteers to participate in MercyCare programmes."
      icon={Activity}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <VolunteerStat label="Opportunities" value="12" icon={Activity} />
        <VolunteerStat
          label="Open"
          value="7"
          icon={CheckCircle2}
          tone="green"
        />
        <VolunteerStat
          label="Upcoming"
          value="5"
          icon={CalendarDays}
          tone="cyan"
        />
        <VolunteerStat
          label="Available Slots"
          value="36"
          icon={Users}
          tone="gold"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <VolunteerSearch placeholder="Search opportunities..." />
      </section>

      <VolunteerTable
        headers={["Opportunity", "Area", "Date", "Capacity", "Status", ""]}
      >
        {opportunities.map((opportunity) => (
          <tr key={opportunity.name} className="hover:bg-slate-50">
            <td className="px-5 py-4 font-semibold text-[#0B1B3A]">
              {opportunity.name}
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {opportunity.area}
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {opportunity.date}
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {opportunity.slots}
            </td>
            <td className="px-5 py-4">
              <VolunteerStatusCell status={opportunity.status} />
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
