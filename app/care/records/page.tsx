import {
  FileCheck2,
  FileLock2,
  FileSearch,
  ShieldCheck,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  CarePerson,
  CareStat,
  CareStatusBadge,
  CareTable,
  ProtectedRecordsNotice,
} from "@/components/admin/CareComponents";

const records = [
  {
    type: "Service Plan",
    reference: "CR-0086",
    person: "Grace Achieng",
    status: "Active",
    tone: "cyan" as const,
    updated: "08 Oct 2026",
  },
  {
    type: "Care Review",
    reference: "CR-0084",
    person: "Samuel Ochieng",
    status: "Review Due",
    tone: "gold" as const,
    updated: "07 Oct 2026",
  },
  {
    type: "Visit Summary",
    reference: "CR-0081",
    person: "Jane Atieno",
    status: "Updated",
    tone: "cyan" as const,
    updated: "06 Oct 2026",
  },
  {
    type: "Support Plan",
    reference: "CR-0078",
    person: "Demo User",
    status: "Restricted",
    tone: "red" as const,
    updated: "04 Oct 2026",
  },
];

export default function CareRecordsPage() {
  return (
    <AdminPage
      eyebrow="Care & Services"
      title="Care Records"
      description="Manage protected care documentation and service-related records."
    >
      <ProtectedRecordsNotice />

      <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CareStat
          icon={FileLock2}
          label="Protected Records"
          value="86"
          note="Private care documentation"
        />
        <CareStat
          icon={FileCheck2}
          label="Updated This Week"
          value="19"
          note="Recently updated records"
        />
        <CareStat
          icon={FileSearch}
          label="Pending Review"
          value="5"
          note="Require staff review"
        />
        <CareStat
          icon={ShieldCheck}
          label="Restricted"
          value="86"
          note="Access-controlled records"
        />
      </section>

      <section className="mt-6">
        <CareTable
          columns={[
            "Record",
            "Client",
            "Status",
            "Last Updated",
            "Access",
            "Action",
          ]}
        >
          {records.map((record) => (
            <tr
              key={record.reference}
              className="border-b border-slate-100 last:border-b-0"
            >
              <td className="px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {record.type}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {record.reference}
                  </p>
                </div>
              </td>

              <td className="px-5 py-4">
                <CarePerson name={record.person} />
              </td>

              <td className="px-5 py-4">
                <CareStatusBadge
                  label={record.status}
                  tone={record.tone}
                />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {record.updated}
              </td>

              <td className="px-5 py-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                  <ShieldCheck size={14} />
                  Protected
                </span>
              </td>

              <td className="px-5 py-4">
                <a
                  href="/care/records"
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
