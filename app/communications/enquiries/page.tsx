import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  Mail,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  CommunicationAction,
  CommunicationPerson,
  CommunicationSearch,
  CommunicationStat,
  CommunicationStatusCell,
  CommunicationTable,
} from "@/components/admin/CommunicationComponents";

const enquiries = [
  {
    type: "General Enquiry",
    subject: "How can I access MercyCare services?",
    person: "Demo User",
    status: "New",
    tone: "gold" as const,
    date: "08 Oct 2026",
  },
  {
    type: "Partnership",
    subject: "Community programme partnership",
    person: "Wellness Partners",
    status: "In Progress",
    tone: "cyan" as const,
    date: "07 Oct 2026",
  },
  {
    type: "Referral / Care Enquiry",
    subject: "Care support for family member",
    person: "Grace Achieng",
    status: "Assigned",
    tone: "cyan" as const,
    date: "06 Oct 2026",
  },
  {
    type: "Feedback",
    subject: "Feedback on community session",
    person: "Jane Atieno",
    status: "Resolved",
    tone: "slate" as const,
    date: "04 Oct 2026",
  },
];

export default function EnquiriesPage() {
  return (
    <AdminPage
      eyebrow="Communications"
      title="Enquiries"
      description="Review and manage general, partnership, referral and feedback enquiries."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CommunicationStat
          icon={Mail}
          label="Open Enquiries"
          value="17"
          note="Currently active"
        />
        <CommunicationStat
          icon={Clock3}
          label="New"
          value="5"
          note="Awaiting triage"
        />
        <CommunicationStat
          icon={ClipboardList}
          label="Assigned"
          value="8"
          note="With staff members"
        />
        <CommunicationStat
          icon={CheckCircle2}
          label="Resolved"
          value="24"
          note="This month"
        />
      </section>

      <section className="mt-6">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-[#0B1B3A]">
            Recent Enquiries
          </h2>
          <CommunicationSearch placeholder="Search enquiries..." />
        </div>

        <CommunicationTable
          columns={[
            "Enquiry Type",
            "Requester",
            "Subject",
            "Status",
            "Received",
            "Action",
          ]}
        >
          {enquiries.map((enquiry) => (
            <tr
              key={`${enquiry.type}-${enquiry.subject}`}
              className="border-b border-slate-100 last:border-b-0"
            >
              <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                {enquiry.type}
              </td>

              <td className="px-5 py-4">
                <CommunicationPerson name={enquiry.person} />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {enquiry.subject}
              </td>

              <td className="px-5 py-4">
                <CommunicationStatusCell
                  label={enquiry.status}
                  tone={enquiry.tone}
                />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {enquiry.date}
              </td>

              <td className="px-5 py-4">
                <CommunicationAction href="/communications/enquiries" />
              </td>
            </tr>
          ))}
        </CommunicationTable>
      </section>
    </AdminPage>
  );
}
