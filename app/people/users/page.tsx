import {
  Activity,
  ShieldCheck,
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

const users = [
  {
    name: "Demo User",
    secondary: "Registered User",
    email: "demo.user@example.com",
    phone: "+254 700 000 001",
    status: "Active",
    role: "Registered User",
  },
  {
    name: "Grace Achieng",
    secondary: "Client / Care Recipient",
    email: "grace@example.com",
    phone: "+254 700 000 002",
    status: "Active",
    role: "Client",
  },
  {
    name: "Brian Otieno",
    secondary: "Volunteer",
    email: "brian@example.com",
    phone: "+254 700 000 003",
    status: "Active",
    role: "Volunteer",
  },
  {
    name: "MercyCare Admin",
    secondary: "Internal Account",
    email: "admin@mercycare.example",
    phone: "+254 700 000 004",
    status: "Active",
    role: "Administrator",
  },
];

export default function UsersPage() {
  return (
    <AdminPage
      title="Users"
      description="Manage registered accounts and monitor the people interacting with MercyCare through the user portal."
      icon={Users}
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <PeopleStat
          icon={Users}
          label="Total Users"
          value="248"
          note="Registered accounts"
        />
        <PeopleStat
          icon={UserCheck}
          label="Active"
          value="231"
          note="Currently active"
        />
        <PeopleStat
          icon={ShieldCheck}
          label="Staff Accounts"
          value="18"
          note="Internal users"
        />
        <PeopleStat
          icon={Activity}
          label="New This Month"
          value="14"
          note="Recent registrations"
        />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0B1B3A]">
              Registered Users
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Accounts currently associated with MercyCare.
            </p>
          </div>

          <SearchBar placeholder="Search users..." />
        </div>
      </section>

      <PersonTable
        columns={["User", "Email", "Phone", "Status / Role", "Action"]}
      >
        {users.map((user) => (
          <PersonRow
            key={user.email}
            name={user.name}
            secondary={user.secondary}
            email={user.email}
            phone={user.phone}
            status={user.status}
            role={user.role}
            href="#"
          />
        ))}
      </PersonTable>
    </AdminPage>
  );
}
