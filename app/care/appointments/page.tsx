import {
  CalendarCheck2,
  CalendarDays,
  CalendarClock,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  CarePerson,
  CareStat,
  CareStatusBadge,
  CareTable,
  LocationLabel,
} from "@/components/admin/CareComponents";

const appointments = [
  {
    title: "Care Support Review",
    person: "Grace Achieng",
    date: "14 Oct 2026",
    time: "10:00 AM",
    status: "Confirmed",
    tone: "cyan" as const,
    mode: "In Person",
  },
  {
    title: "Family Support Session",
    person: "Jane Atieno",
    date: "21 Oct 2026",
    time: "2:00 PM",
    status: "Confirmed",
    tone: "cyan" as const,
    mode: "Virtual",
  },
  {
    title: "Senior Wellness Check-in",
    person: "Samuel Ochieng",
    date: "16 Oct 2026",
    time: "11:00 AM",
    status: "Pending",
    tone: "gold" as const,
    mode: "Community Location",
  },
  {
    title: "Service Review",
    person: "Demo User",
    date: "18 Oct 2026",
    time: "9:00 AM",
    status: "Pending",
    tone: "gold" as const,
    mode: "Office",
  },
];

export default function AppointmentsPage() {
  return (
    <AdminPage
      eyebrow="Care & Services"
      title="Appointments"
      description="Coordinate upcoming care appointments, reviews and support sessions."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CareStat
          icon={CalendarDays}
          label="Upcoming"
          value="14"
          note="Scheduled appointments"
        />
        <CareStat
          icon={CalendarCheck2}
          label="Today"
          value="2"
          note="Appointments today"
        />
        <CareStat
          icon={Clock3}
          label="Pending Confirmation"
          value="4"
          note="Awaiting confirmation"
        />
        <CareStat
          icon={CheckCircle2}
          label="Completed This Month"
          value="18"
          note="Completed appointments"
        />
      </section>

      <section className="mt-6">
        <CareTable
          columns={[
            "Appointment",
            "Client",
            "Date & Time",
            "Status",
            "Mode",
            "Action",
          ]}
        >
          {appointments.map((appointment) => (
            <tr
              key={`${appointment.title}-${appointment.person}`}
              className="border-b border-slate-100 last:border-b-0"
            >
              <td className="px-5 py-4">
                <p className="text-sm font-semibold text-slate-800">
                  {appointment.title}
                </p>
              </td>

              <td className="px-5 py-4">
                <CarePerson name={appointment.person} />
              </td>

              <td className="px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    {appointment.date}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {appointment.time}
                  </p>
                </div>
              </td>

              <td className="px-5 py-4">
                <CareStatusBadge
                  label={appointment.status}
                  tone={appointment.tone}
                />
              </td>

              <td className="px-5 py-4">
                <LocationLabel value={appointment.mode} />
              </td>

              <td className="px-5 py-4">
                <a
                  href="/care/appointments"
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
