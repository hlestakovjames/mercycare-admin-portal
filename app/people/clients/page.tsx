import {
  CalendarDays,
  HeartPulse,
  UserCheck,
  Users,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  PeopleStat,
  PersonRow,
  PersonTable,
  SearchBar,
} from "@/components/admin/PeopleComponents";

const clients = [
  {
    name: "Grace Achieng",
    secondary: "MC-00124",
    email: "grace@example.com",
    phone: "+254 700 000 002",
    status: "Active",
    role: "Home Care",
  },
  {
    name: "Samuel Ochieng",
    secondary: "MC-00119",
    email: "samuel@example.com",
    phone: "+254 700 000 005",
    status: "Active",
    role: "Senior Wellness",
  },
  {
    name: "Jane Atieno",
    secondary: "MC-00108",
    email: "jane@example.com",
    phone: "+254 700 000 006",
    status: "Review",
    role: "Family Support",
  },
];

export default function ClientsPage() {
  return (
    <AdminPage
      title="Clients & Care Recipients"
      description="Manage client and care-recipient records, service relationships and operational status."
      icon={HeartPulse}
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <PeopleStat
          icon={Users}
          label="Total Clients"
          value="86"
          note="Care recipient records"
        />
        <PeopleStat
          icon={HeartPulse}
          label="Active Care"
          value="36"
          note="Current services"
        />
        <PeopleStat
          icon={CalendarDays}
          label="Appointments"
          value="14"
          note="Upcoming"
        />
        <PeopleStat
          icon={UserCheck}
          label="Needs Review"
          value="5"
          note="Administrative review"
        />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0B1B3A]">
              Care Recipients
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Client records currently managed by MercyCare.
            </p>
          </div>

          <SearchBar placeholder="Search clients..." />
        </div>
      </section>

      <PersonTable
        columns={["Client", "Email", "Phone", "Status / Service", "Action"]}
      >
        {clients.map((client) => (
          <PersonRow
            key={client.secondary}
            name={client.name}
            secondary={client.secondary}
            email={client.email}
            phone={client.phone}
            status={client.status}
            statusTone={client.status === "Review" ? "gold" : "cyan"}
            role={client.role}
            href="#"
          />
        ))}
      </PersonTable>
    </AdminPage>
  );
}
