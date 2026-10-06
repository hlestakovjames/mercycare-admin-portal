import {
  Activity,
  CheckCircle2,
  HeartPulse,
  RotateCcw,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  CareRow,
  CareStat,
  CareTable,
} from "@/components/admin/CareComponents";

const services = [
  {
    service: "Home Nursing",
    reference: "MC-00124",
    person: "Grace Achieng",
    status: "Active",
    tone: "cyan" as const,
    date: "01 Oct 2026",
    meta: "Ongoing",
  },
  {
    service: "Senior Wellness",
    reference: "MC-00119",
    person: "Samuel Ochieng",
    status: "Active",
    tone: "cyan" as const,
    date: "20 Sep 2026",
    meta: "Ongoing",
  },
  {
    service: "Family Caregiver Support",
    reference: "MC-00108",
    person: "Jane Atieno",
    status: "Review",
    tone: "gold" as const,
    date: "28 Sep 2026",
    meta: "Review due",
  },
  {
    service: "Post-Hospital Recovery",
    reference: "MC-00097",
    person: "Demo User",
    status: "Completed",
    tone: "slate" as const,
    date: "30 Sep 2026",
    meta: "Closed",
  },
];

export default function ActiveServicesPage() {
  return (
    <AdminPage
      eyebrow="Care & Services"
      title="Active Services"
      description="Monitor active service relationships, reviews and completed care engagements."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CareStat
          icon={HeartPulse}
          label="Active Services"
          value="36"
          note="Currently active"
        />
        <CareStat
          icon={Activity}
          label="New"
          value="4"
          note="Started this period"
        />
        <CareStat
          icon={RotateCcw}
          label="Due Review"
          value="5"
          note="Require follow-up"
        />
        <CareStat
          icon={CheckCircle2}
          label="Completed"
          value="8"
          note="Completed this month"
        />
      </section>

      <section className="mt-6">
        <CareTable
          columns={[
            "Service",
            "Client",
            "Status",
            "Start / End",
            "Service State",
            "Action",
          ]}
        >
          {services.map((service) => (
            <CareRow
              key={service.reference}
              service={service.service}
              reference={service.reference}
              person={service.person}
              status={service.status}
              statusTone={service.tone}
              date={service.date}
              meta={service.meta}
              href="/care/services"
            />
          ))}
        </CareTable>
      </section>
    </AdminPage>
  );
}
