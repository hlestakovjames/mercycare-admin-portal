import { Activity, CheckCircle2, Users, Clock3 } from "lucide-react";
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

const activities = [
  {
    name: "Senior Wellness Support Visit",
    type: "Senior Support",
    date: "12 Oct 2026",
    location: "Kisumu County",
    participants: 18,
    status: "Planned",
  },
  {
    name: "Community Outreach Session",
    type: "Community Outreach",
    date: "19 Oct 2026",
    location: "Nyakwere Community",
    participants: 32,
    status: "Planned",
  },
  {
    name: "Family Caregiver Support Circle",
    type: "Family & Caregiver",
    date: "23 Oct 2026",
    location: "Kisumu County",
    participants: 14,
    status: "Confirmed",
  },
  {
    name: "Health Awareness Outreach",
    type: "Awareness & Education",
    date: "29 Sep 2026",
    location: "Community Centre",
    participants: 26,
    status: "Completed",
  },
];

export default function ActivitiesPage() {
  return (
    <AdminPage
      eyebrow="Events & Activities"
      title="Activities"
      description="Coordinate community activities, outreach sessions and programme participation."
      icon={Activity}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <EventStat label="Activities" value="18" icon={Activity} />
        <EventStat
          label="Planned"
          value="7"
          icon={Clock3}
          tone="cyan"
        />
        <EventStat
          label="Participants"
          value="214"
          icon={Users}
          tone="gold"
        />
        <EventStat
          label="Completed"
          value="11"
          icon={CheckCircle2}
          tone="green"
        />
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <EventSearch placeholder="Search activities..." />
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-[#0E8EAF] px-4 text-sm font-semibold text-white transition hover:bg-[#0B7089]"
          >
            Create Activity
          </button>
        </div>
      </section>

      <EventTable
        headers={[
          "Activity",
          "Type",
          "Date",
          "Location",
          "Participants",
          "Status",
          "",
        ]}
      >
        {activities.map((activity) => (
          <tr key={activity.name} className="hover:bg-slate-50">
            <td className="px-5 py-4">
              <p className="font-semibold text-[#0B1B3A]">{activity.name}</p>
            </td>
            <td className="px-5 py-4">
              <EventType>{activity.type}</EventType>
            </td>
            <td className="px-5 py-4">
              <EventDate date={activity.date} />
            </td>
            <td className="px-5 py-4">
              <EventLocation>{activity.location}</EventLocation>
            </td>
            <td className="px-5 py-4 text-sm font-medium text-slate-600">
              {activity.participants}
            </td>
            <td className="px-5 py-4">
              <EventStatusCell status={activity.status} />
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
