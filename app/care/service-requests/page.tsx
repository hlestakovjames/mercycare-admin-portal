import {
  ClipboardList,
  Clock3,
  FileSearch,
  ListChecks,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  CareRow,
  CareStat,
  CareTable,
} from "@/components/admin/CareComponents";

const requests = [
  {
    service: "Home Nursing",
    reference: "SR-00128",
    person: "Grace Achieng",
    status: "Submitted",
    tone: "gold" as const,
    date: "08 Oct 2026",
    meta: "New request",
  },
  {
    service: "Senior Wellness",
    reference: "SR-00124",
    person: "Samuel Ochieng",
    status: "Under Review",
    tone: "gold" as const,
    date: "06 Oct 2026",
    meta: "Assessment pending",
  },
  {
    service: "Family Caregiver Support",
    reference: "SR-00119",
    person: "Jane Atieno",
    status: "In Progress",
    tone: "cyan" as const,
    date: "03 Oct 2026",
    meta: "Coordinator assigned",
  },
  {
    service: "General Service Enquiry",
    reference: "SR-00115",
    person: "Demo User",
    status: "Received",
    tone: "slate" as const,
    date: "02 Oct 2026",
    meta: "Initial enquiry",
  },
];

export default function ServiceRequestsPage() {
  return (
    <AdminPage
      eyebrow="Care & Services"
      title="Service Requests"
      description="Review, triage and manage incoming requests for MercyCare services."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CareStat
          icon={ClipboardList}
          label="Open Requests"
          value="12"
          note="Currently requiring action"
        />
        <CareStat
          icon={Clock3}
          label="New Today"
          value="3"
          note="Received today"
        />
        <CareStat
          icon={FileSearch}
          label="Under Review"
          value="5"
          note="Awaiting assessment"
        />
        <CareStat
          icon={ListChecks}
          label="In Progress"
          value="4"
          note="Being processed"
        />
      </section>

      <section className="mt-6">
        <CareTable
          columns={[
            "Service",
            "Client / Requester",
            "Status",
            "Received",
            "Workflow",
            "Action",
          ]}
        >
          {requests.map((request) => (
            <CareRow
              key={request.reference}
              service={request.service}
              reference={request.reference}
              person={request.person}
              status={request.status}
              statusTone={request.tone}
              date={request.date}
              meta={request.meta}
              href="/care/service-requests"
            />
          ))}
        </CareTable>
      </section>
    </AdminPage>
  );
}
