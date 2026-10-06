import {
  BriefcaseBusiness,
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

const staff = [
  {
    name: "MercyCare Administrator",
    secondary: "STAFF-0001",
    email: "admin@mercycare.example",
    phone: "+254 700 000 004",
    status: "Active",
    role: "Administrator",
  },
  {
    name: "Care Coordinator",
    secondary: "STAFF-0007",
    email: "coordinator@mercycare.example",
    phone: "+254 700 000 015",
    status: "Active",
    role: "Care Coordination",
  },
  {
    name: "Community Programs Officer",
    secondary: "STAFF-0011",
    email: "programs@mercycare.example",
    phone: "+254 700 000 016",
    status: "Active",
    role: "Programs",
  },
];

export default function StaffPage() {
  return (
    <AdminPage
      title="Staff"
      description="Manage internal MercyCare staff records and their organisational roles."
      icon={ShieldCheck}
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <PeopleStat
          icon={Users}
          label="Staff Members"
          value="18"
          note="Internal records"
        />
        <PeopleStat
          icon={UserCheck}
          label="Active Staff"
          value="17"
          note="Currently active"
        />
        <PeopleStat
          icon={ShieldCheck}
          label="Administrators"
          value="4"
          note="Administrative accounts"
        />
        <PeopleStat
          icon={BriefcaseBusiness}
          label="Departments"
          value="6"
          note="Operational areas"
        />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0B1B3A]">
              Staff Directory
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Internal staff and administrative personnel.
            </p>
          </div>

          <SearchBar placeholder="Search staff..." />
        </div>
      </section>

      <PersonTable
        columns={["Staff Member", "Email", "Phone", "Status / Role", "Action"]}
      >
        {staff.map((member) => (
          <PersonRow
            key={member.secondary}
            name={member.name}
            secondary={member.secondary}
            email={member.email}
            phone={member.phone}
            status={member.status}
            role={member.role}
            href="#"
          />
        ))}
      </PersonTable>
    </AdminPage>
  );
}
