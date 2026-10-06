import {
  Bell,
  CheckCheck,
  Clock3,
  Send,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  CommunicationAction,
  CommunicationChannel,
  CommunicationSearch,
  CommunicationStat,
  CommunicationStatusCell,
  CommunicationTable,
} from "@/components/admin/CommunicationComponents";

const notifications = [
  {
    title: "Appointment reminder",
    channel: "Portal" as const,
    audience: "Registered users",
    status: "Delivered",
    tone: "cyan" as const,
    date: "08 Oct 2026",
  },
  {
    title: "Community wellness event reminder",
    channel: "SMS" as const,
    audience: "Event registrants",
    status: "Scheduled",
    tone: "gold" as const,
    date: "08 Oct 2026",
  },
  {
    title: "Service request update",
    channel: "Email" as const,
    audience: "Affected users",
    status: "Delivered",
    tone: "cyan" as const,
    date: "07 Oct 2026",
  },
  {
    title: "Volunteer opportunity notice",
    channel: "WhatsApp" as const,
    audience: "Active volunteers",
    status: "Draft",
    tone: "slate" as const,
    date: "06 Oct 2026",
  },
];

export default function NotificationsPage() {
  return (
    <AdminPage
      eyebrow="Communications"
      title="Notifications"
      description="Monitor system notifications and planned communication delivery."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CommunicationStat
          icon={Bell}
          label="Total Notifications"
          value="286"
          note="Communication events"
        />
        <CommunicationStat
          icon={CheckCheck}
          label="Delivered"
          value="251"
          note="Successfully delivered"
        />
        <CommunicationStat
          icon={Clock3}
          label="Scheduled"
          value="14"
          note="Awaiting delivery"
        />
        <CommunicationStat
          icon={Send}
          label="Sent Today"
          value="32"
          note="Across all channels"
        />
      </section>

      <section className="mt-6">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-[#0B1B3A]">
            Notification Activity
          </h2>
          <CommunicationSearch placeholder="Search notifications..." />
        </div>

        <CommunicationTable
          columns={[
            "Notification",
            "Channel",
            "Audience",
            "Status",
            "Date",
            "Action",
          ]}
        >
          {notifications.map((notification) => (
            <tr
              key={`${notification.title}-${notification.channel}`}
              className="border-b border-slate-100 last:border-b-0"
            >
              <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                {notification.title}
              </td>

              <td className="px-5 py-4">
                <CommunicationChannel channel={notification.channel} />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {notification.audience}
              </td>

              <td className="px-5 py-4">
                <CommunicationStatusCell
                  label={notification.status}
                  tone={notification.tone}
                />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {notification.date}
              </td>

              <td className="px-5 py-4">
                <CommunicationAction href="/communications/notifications" />
              </td>
            </tr>
          ))}
        </CommunicationTable>
      </section>
    </AdminPage>
  );
}
