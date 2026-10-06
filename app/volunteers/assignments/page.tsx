import { FolderKanban, CheckCircle2, Clock3, Users } from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  VolunteerAction,
  VolunteerPerson,
  VolunteerSearch,
  VolunteerStat,
  VolunteerStatusCell,
  VolunteerTable,
} from "@/components/admin/VolunteerComponents";

const assignments = [
  {
    volunteer: "Brian Otieno",
    opportunity: "Community Outreach Volunteer",
    date: "26 Oct 2026",
    role: "Outreach Support",
    status: "Assigned",
  },
  {
    volunteer: "Mary Akinyi",
    opportunity: "Senior Wellness Support",
    date: "02 Nov 2026",
    role: "Wellness Support",
    status: "Assigned",
  },
  {
    volunteer: "Peter Ouma",
    opportunity: "Health Awareness Outreach",
    date: "29 Sep 2026",
    role: "Programme Support",
    status: "Completed",
  },
  {
    volunteer: "Amina Hassan",
    opportunity: "Mama na Mtoto Support",
    date: "08 Nov 2026",
    role: "Community Support",
    status: "Pending",
  },
];

export default function VolunteerAssignmentsPage() {
  return (
    <AdminPage
      eyebrow="Volunteers"
      title="Assignments"
      description="Assign volunteers to opportunities and programme activities."
      icon={FolderKanban}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <VolunteerStat label="Assignments" value="42" icon={FolderKanban} />
        <VolunteerStat
          label="Active"
          value="26"
          icon={CheckCircle2}
          tone="green"
        />
        <VolunteerStat
          label="Pending"
          value="8"
          icon={Clock3}
          tone="gold"
        />
        <VolunteerStat
          label="Volunteers Assigned"
          value="31"
          icon={Users}
          tone="cyan"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <VolunteerSearch placeholder="Search assignments..." />
      </section>

      <VolunteerTable
        headers={[
          "Volunteer",
          "Opportunity",
          "Date",
          "Role",
          "Status",
          "",
        ]}
      >
        {assignments.map((assignment) => (
          <tr
            key={`${assignment.volunteer}-${assignment.opportunity}`}
            className="hover:bg-slate-50"
          >
            <td className="px-5 py-4">
              <VolunteerPerson name={assignment.volunteer} />
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {assignment.opportunity}
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {assignment.date}
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {assignment.role}
            </td>
            <td className="px-5 py-4">
              <VolunteerStatusCell status={assignment.status} />
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
