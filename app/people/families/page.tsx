import {
  HeartHandshake,
  Link2,
  UserRoundCheck,
  Users,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  PeopleStat,
  PersonRow,
  PersonTable,
  SearchBar,
} from "@/components/admin/PeopleComponents";

const families = [
  {
    name: "Achieng Family",
    secondary: "Supporting MC-00124",
    email: "family@example.com",
    phone: "+254 700 000 007",
    status: "Active",
    role: "Primary Caregiver",
  },
  {
    name: "Ochieng Family",
    secondary: "Supporting MC-00119",
    email: "family2@example.com",
    phone: "+254 700 000 008",
    status: "Active",
    role: "Family Contact",
  },
  {
    name: "Atieno Family",
    secondary: "Supporting MC-00108",
    email: "family3@example.com",
    phone: "+254 700 000 009",
    status: "Pending",
    role: "Caregiver",
  },
];

export default function FamiliesPage() {
  return (
    <AdminPage
      title="Families & Caregivers"
      description="Manage family and caregiver relationships connected to MercyCare clients and services."
      icon={HeartHandshake}
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <PeopleStat
          icon={Users}
          label="Families"
          value="52"
          note="Registered relationships"
        />
        <PeopleStat
          icon={UserRoundCheck}
          label="Caregivers"
          value="61"
          note="Active contacts"
        />
        <PeopleStat
          icon={Link2}
          label="Linked Clients"
          value="48"
          note="Relationship records"
        />
        <PeopleStat
          icon={UserRoundCheck}
          label="Pending"
          value="6"
          note="Awaiting confirmation"
        />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0B1B3A]">
              Family & Caregiver Relationships
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              People supporting or connected to MercyCare clients.
            </p>
          </div>

          <SearchBar placeholder="Search families..." />
        </div>
      </section>

      <PersonTable
        columns={["Family / Contact", "Email", "Phone", "Status / Role", "Action"]}
      >
        {families.map((family) => (
          <PersonRow
            key={family.secondary}
            name={family.name}
            secondary={family.secondary}
            email={family.email}
            phone={family.phone}
            status={family.status}
            statusTone={family.status === "Pending" ? "gold" : "cyan"}
            role={family.role}
            href="#"
          />
        ))}
      </PersonTable>
    </AdminPage>
  );
}
