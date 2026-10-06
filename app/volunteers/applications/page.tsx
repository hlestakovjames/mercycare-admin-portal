import { ClipboardList, CheckCircle2, Clock3, Users } from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  VolunteerAction,
  VolunteerPerson,
  VolunteerSearch,
  VolunteerStat,
  VolunteerStatusCell,
  VolunteerTable,
} from "@/components/admin/VolunteerComponents";

const applications = [
  {
    id: "VOL-00124",
    applicant: "Demo Volunteer",
    area: "Community Outreach",
    submitted: "10 Oct 2026",
    status: "Under Review",
  },
  {
    id: "VOL-00121",
    applicant: "Amina Hassan",
    area: "Senior Support",
    submitted: "08 Oct 2026",
    status: "Pending",
  },
  {
    id: "VOL-00118",
    applicant: "David Ochieng",
    area: "Health Awareness",
    submitted: "05 Oct 2026",
    status: "Approved",
  },
  {
    id: "VOL-00115",
    applicant: "Mercy Wanjiku",
    area: "Family Support",
    submitted: "02 Oct 2026",
    status: "Approved",
  },
];

export default function VolunteerApplicationsPage() {
  return (
    <AdminPage
      eyebrow="Volunteers"
      title="Volunteer Applications"
      description="Review and process volunteer applications."
      icon={ClipboardList}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <VolunteerStat label="Applications" value="9" icon={ClipboardList} />
        <VolunteerStat
          label="Approved"
          value="5"
          icon={CheckCircle2}
          tone="green"
        />
        <VolunteerStat label="Pending" value="3" icon={Clock3} tone="gold" />
        <VolunteerStat
          label="New Applicants"
          value="4"
          icon={Users}
          tone="cyan"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <VolunteerSearch placeholder="Search applications..." />
      </section>

      <VolunteerTable
        headers={[
          "Application",
          "Applicant",
          "Area",
          "Submitted",
          "Status",
          "",
        ]}
      >
        {applications.map((application) => (
          <tr key={application.id} className="hover:bg-slate-50">
            <td className="px-5 py-4 text-sm font-semibold text-[#0E8EAF]">
              {application.id}
            </td>
            <td className="px-5 py-4">
              <VolunteerPerson name={application.applicant} />
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {application.area}
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {application.submitted}
            </td>
            <td className="px-5 py-4">
              <VolunteerStatusCell status={application.status} />
            </td>
            <td className="px-5 py-4 text-right">
              <VolunteerAction>Review</VolunteerAction>
            </td>
          </tr>
        ))}
      </VolunteerTable>
    </AdminPage>
  );
}
