import { Users, UserCheck, ClipboardList, Activity } from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  VolunteerAction,
  VolunteerPerson,
  VolunteerSearch,
  VolunteerStat,
  VolunteerStatusCell,
  VolunteerTable,
} from "@/components/admin/VolunteerComponents";

const volunteers = [
  {
    name: "Brian Otieno",
    email: "brian.otieno@example.com",
    category: "Community Outreach",
    status: "Active",
    participation: "12 activities",
  },
  {
    name: "Mary Akinyi",
    email: "mary.akinyi@example.com",
    category: "Senior Support",
    status: "Active",
    participation: "9 activities",
  },
  {
    name: "Peter Ouma",
    email: "peter.ouma@example.com",
    category: "Health Awareness",
    status: "Active",
    participation: "7 activities",
  },
  {
    name: "Demo Volunteer",
    email: "volunteer@example.com",
    category: "Community Programmes",
    status: "Under Review",
    participation: "New applicant",
  },
];

export default function VolunteersPage() {
  return (
    <AdminPage
      eyebrow="People"
      title="Volunteers"
      description="Manage MercyCare volunteers, participation and engagement."
      icon={Users}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <VolunteerStat label="Total Volunteers" value="74" icon={Users} />
        <VolunteerStat
          label="Active"
          value="58"
          icon={UserCheck}
          tone="green"
        />
        <VolunteerStat
          label="Participating"
          value="31"
          icon={Activity}
          tone="cyan"
        />
        <VolunteerStat
          label="Applications"
          value="9"
          icon={ClipboardList}
          tone="gold"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <VolunteerSearch />
      </section>

      <VolunteerTable
        headers={[
          "Volunteer",
          "Area",
          "Status",
          "Participation",
          "",
        ]}
      >
        {volunteers.map((volunteer) => (
          <tr key={volunteer.email} className="hover:bg-slate-50">
            <td className="px-5 py-4">
              <VolunteerPerson
                name={volunteer.name}
                secondary={volunteer.email}
              />
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {volunteer.category}
            </td>
            <td className="px-5 py-4">
              <VolunteerStatusCell status={volunteer.status} />
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {volunteer.participation}
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
