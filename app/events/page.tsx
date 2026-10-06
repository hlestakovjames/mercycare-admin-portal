import { CalendarDays, Plus, Users } from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  EventAction,
  EventDate,
  EventLocation,
  EventSearch,
  EventStat,
  EventStatusCell,
  EventTable,
  EventType,
} from "@/components/admin/EventComponents";

const events = [
  {
    name: "Community Health & Wellness Day",
    type: "Community",
    date: "17 Oct 2026",
    time: "9:00 AM",
    location: "Nyakwere Primary School",
    status: "Upcoming",
    registrations: "42 registered",
  },
  {
    name: "Tuko Pamoja Senior Wellness Session",
    type: "Health & Wellness",
    date: "24 Oct 2026",
    time: "10:00 AM",
    location: "Kisumu County",
    status: "Upcoming",
    registrations: "28 registered",
  },
  {
    name: "Mama na Mtoto Community Session",
    type: "Programme",
    date: "31 Oct 2026",
    time: "10:00 AM",
    location: "Kisumu County",
    status: "Upcoming",
    registrations: "35 registered",
  },
  {
    name: "Caregiver Awareness Session",
    type: "Awareness",
    date: "05 Nov 2026",
    time: "2:00 PM",
    location: "Community Centre",
    status: "Draft",
    registrations: "Not published",
  },
];

export default function EventsPage() {
  return (
    <AdminPage
      eyebrow="Events & Activities"
      title="Events"
      description="Plan, publish and monitor MercyCare events and community programmes."
      icon={CalendarDays}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <EventStat label="Upcoming Events" value="5" icon={CalendarDays} />
        <EventStat
          label="This Month"
          value="3"
          icon={CalendarDays}
          tone="green"
        />
        <EventStat
          label="Registrations"
          value="105"
          icon={Users}
          tone="gold"
        />
        <EventStat
          label="Draft Events"
          value="2"
          icon={CalendarDays}
          tone="slate"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <EventSearch />
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#0E8EAF] px-4 text-sm font-semibold text-white transition hover:bg-[#0B7089]"
          >
            <Plus className="h-4 w-4" />
            Create Event
          </button>
        </div>
      </section>

      <EventTable
        headers={[
          "Event",
          "Type",
          "Date",
          "Location",
          "Status",
          "Registrations",
          "",
        ]}
      >
        {events.map((event) => (
          <tr key={event.name} className="hover:bg-slate-50">
            <td className="px-5 py-4">
              <p className="font-semibold text-[#0B1B3A]">{event.name}</p>
            </td>
            <td className="px-5 py-4">
              <EventType>{event.type}</EventType>
            </td>
            <td className="px-5 py-4">
              <EventDate date={event.date} time={event.time} />
            </td>
            <td className="px-5 py-4">
              <EventLocation>{event.location}</EventLocation>
            </td>
            <td className="px-5 py-4">
              <EventStatusCell status={event.status} />
            </td>
            <td className="px-5 py-4 text-sm text-slate-600">
              {event.registrations}
            </td>
            <td className="px-5 py-4 text-right">
              <EventAction>View</EventAction>
            </td>
          </tr>
        ))}
      </EventTable>
    </AdminPage>
  );
}
