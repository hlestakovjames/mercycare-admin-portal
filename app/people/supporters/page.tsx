import {
  Heart,
  Megaphone,
  Receipt,
  Users,
  WalletCards,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  PeopleStat,
  PersonRow,
  PersonTable,
  SearchBar,
} from "@/components/admin/PeopleComponents";

const supporters = [
  {
    name: "Community Supporter",
    secondary: "SUP-00102",
    email: "supporter@example.com",
    phone: "+254 700 000 012",
    status: "Active",
    role: "Donor",
  },
  {
    name: "Wellness Partners",
    secondary: "ORG-00021",
    email: "partners@example.com",
    phone: "+254 700 000 013",
    status: "Active",
    role: "Organisation",
  },
  {
    name: "Mama na Mtoto Supporter",
    secondary: "SUP-00089",
    email: "supporter2@example.com",
    phone: "+254 700 000 014",
    status: "Active",
    role: "Campaign Supporter",
  },
];

export default function SupportersPage() {
  return (
    <AdminPage
      title="Donors & Supporters"
      description="Manage donor and supporter relationships, giving history and campaign engagement."
      icon={WalletCards}
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        <PeopleStat
          icon={Users}
          label="Supporters"
          value="96"
          note="Registered supporters"
        />
        <PeopleStat
          icon={Heart}
          label="Active Donors"
          value="61"
          note="Recent giving activity"
        />
        <PeopleStat
          icon={WalletCards}
          label="Total Support"
          value="KSh 184K"
          note="Demonstration total"
        />
        <PeopleStat
          icon={Megaphone}
          label="Campaigns"
          value="8"
          note="Supported campaigns"
        />
        <PeopleStat
          icon={Receipt}
          label="Receipts"
          value="143"
          note="Issued records"
        />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0B1B3A]">
              Supporter Records
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Donors, organisations and other MercyCare supporters.
            </p>
          </div>

          <SearchBar placeholder="Search supporters..." />
        </div>
      </section>

      <PersonTable
        columns={["Supporter", "Email", "Phone", "Status / Type", "Action"]}
      >
        {supporters.map((supporter) => (
          <PersonRow
            key={supporter.secondary}
            name={supporter.name}
            secondary={supporter.secondary}
            email={supporter.email}
            phone={supporter.phone}
            status={supporter.status}
            role={supporter.role}
            href="#"
          />
        ))}
      </PersonTable>
    </AdminPage>
  );
}
