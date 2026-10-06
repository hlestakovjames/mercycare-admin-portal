import {
  Bell,
  CheckCircle2,
  Clock3,
  Megaphone,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  AnnouncementType,
  CommunicationAction,
  CommunicationSearch,
  CommunicationStat,
  CommunicationStatusCell,
  CommunicationTable,
} from "@/components/admin/CommunicationComponents";

const announcements = [
  {
    title: "Community Health & Wellness Day",
    type: "Event" as const,
    audience: "Registered participants",
    status: "Published",
    tone: "cyan" as const,
    date: "08 Oct 2026",
  },
  {
    title: "Tuko Pamoja programme update",
    type: "Service" as const,
    audience: "Programme participants",
    status: "Published",
    tone: "cyan" as const,
    date: "06 Oct 2026",
  },
  {
    title: "Volunteer opportunity notice",
    type: "General" as const,
    audience: "Active volunteers",
    status: "Scheduled",
    tone: "gold" as const,
    date: "05 Oct 2026",
  },
  {
    title: "Community launch preparation update",
    type: "General" as const,
    audience: "All registered users",
    status: "Draft",
    tone: "slate" as const,
    date: "04 Oct 2026",
  },
];

export default function AnnouncementsPage() {
  return (
    <AdminPage
      eyebrow="Communications"
      title="Announcements"
      description="Create, schedule and manage operational announcements for MercyCare audiences."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CommunicationStat
          icon={Megaphone}
          label="Total Announcements"
          value="42"
          note="Published and archived"
        />
        <CommunicationStat
          icon={CheckCircle2}
          label="Published"
          value="31"
          note="Currently visible"
        />
        <CommunicationStat
          icon={Clock3}
          label="Scheduled"
          value="4"
          note="Planned announcements"
        />
        <CommunicationStat
          icon={Bell}
          label="Drafts"
          value="7"
          note="Awaiting publication"
        />
      </section>

      <section className="mt-6">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-[#0B1B3A]">
            Announcement Centre
          </h2>
          <CommunicationSearch placeholder="Search announcements..." />
        </div>

        <CommunicationTable
          columns={[
            "Announcement",
            "Type",
            "Audience",
            "Status",
            "Date",
            "Action",
          ]}
        >
          {announcements.map((announcement) => (
            <tr
              key={announcement.title}
              className="border-b border-slate-100 last:border-b-0"
            >
              <td className="px-5 py-4">
                <p className="text-sm font-semibold text-slate-800">
                  {announcement.title}
                </p>
              </td>

              <td className="px-5 py-4">
                <AnnouncementType type={announcement.type} />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {announcement.audience}
              </td>

              <td className="px-5 py-4">
                <CommunicationStatusCell
                  label={announcement.status}
                  tone={announcement.tone}
                />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {announcement.date}
              </td>

              <td className="px-5 py-4">
                <CommunicationAction href="/communications/announcements" />
              </td>
            </tr>
          ))}
        </CommunicationTable>
      </section>
    </AdminPage>
  );
}
