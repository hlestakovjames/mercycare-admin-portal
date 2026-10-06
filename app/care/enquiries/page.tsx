import {
  ClipboardList,
  Clock3,
  HeartPulse,
  Mail,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  CarePerson,
  CareStat,
  CareStatusBadge,
  CareTable,
  EnquiryIcon,
} from "@/components/admin/CareComponents";

const enquiries = [
  {
    type: "Service Enquiry",
    person: "Demo User",
    subject: "Home nursing availability",
    status: "New",
    tone: "gold" as const,
    date: "08 Oct 2026",
  },
  {
    type: "Referral / Care Enquiry",
    person: "Grace Achieng",
    subject: "Family caregiver support",
    status: "In Progress",
    tone: "cyan" as const,
    date: "07 Oct 2026",
  },
  {
    type: "Service Enquiry",
    person: "Samuel Ochieng",
    subject: "Senior wellness programme",
    status: "Assigned",
    tone: "cyan" as const,
    date: "06 Oct 2026",
  },
  {
    type: "General Enquiry",
    person: "Jane Atieno",
    subject: "Service information",
    status: "Closed",
    tone: "slate" as const,
    date: "04 Oct 2026",
  },
];

export default function ServiceEnquiriesPage() {
  return (
    <AdminPage
      eyebrow="Care & Services"
      title="Service Enquiries"
      description="Track service questions, referrals and care-related enquiries received by MercyCare."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CareStat
          icon={Mail}
          label="Open Enquiries"
          value="9"
          note="Currently active"
        />
        <CareStat
          icon={Clock3}
          label="New"
          value="3"
          note="Received recently"
        />
        <CareStat
          icon={HeartPulse}
          label="Care Referrals"
          value="4"
          note="Referral enquiries"
        />
        <CareStat
          icon={ClipboardList}
          label="Resolved"
          value="16"
          note="Resolved this month"
        />
      </section>

      <section className="mt-6">
        <CareTable
          columns={[
            "Enquiry",
            "Requester",
            "Subject",
            "Status",
            "Received",
            "Action",
          ]}
        >
          {enquiries.map((enquiry) => (
            <tr
              key={`${enquiry.type}-${enquiry.person}`}
              className="border-b border-slate-100 last:border-b-0"
            >
              <td className="px-5 py-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                    <EnquiryIcon
                      type={
                        enquiry.type === "Referral / Care Enquiry"
                          ? "referral"
                          : enquiry.type === "General Enquiry"
                            ? "general"
                            : "service"
                      }
                    />
                  </span>
                  {enquiry.type}
                </span>
              </td>

              <td className="px-5 py-4">
                <CarePerson name={enquiry.person} />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {enquiry.subject}
              </td>

              <td className="px-5 py-4">
                <CareStatusBadge
                  label={enquiry.status}
                  tone={enquiry.tone}
                />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {enquiry.date}
              </td>

              <td className="px-5 py-4">
                <a
                  href="/care/enquiries"
                  className="inline-flex rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-[#0B1B3A] hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </CareTable>
      </section>
    </AdminPage>
  );
}
