import {
  CheckCheck,
  Clock3,
  Mail,
  MessageSquare,
} from "lucide-react";
import AdminPage from "@/components/admin/AdminPage";
import {
  CommunicationAction,
  CommunicationChannel,
  CommunicationPerson,
  CommunicationSearch,
  CommunicationStat,
  CommunicationStatusCell,
  CommunicationTable,
} from "@/components/admin/CommunicationComponents";

const messages = [
  {
    subject: "Care support follow-up",
    person: "Grace Achieng",
    channel: "Email" as const,
    status: "Replied",
    tone: "cyan" as const,
    date: "08 Oct 2026",
  },
  {
    subject: "Appointment confirmation",
    person: "Samuel Ochieng",
    channel: "WhatsApp" as const,
    status: "Unread",
    tone: "gold" as const,
    date: "08 Oct 2026",
  },
  {
    subject: "Volunteer opportunity details",
    person: "Brian Otieno",
    channel: "Portal" as const,
    status: "Read",
    tone: "cyan" as const,
    date: "07 Oct 2026",
  },
  {
    subject: "Programme information",
    person: "Demo User",
    channel: "Email" as const,
    status: "Pending Reply",
    tone: "gold" as const,
    date: "06 Oct 2026",
  },
];

export default function MessagesPage() {
  return (
    <AdminPage
      eyebrow="Communications"
      title="Messages"
      description="Manage direct communication between MercyCare and registered users."
    >
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <CommunicationStat
          icon={MessageSquare}
          label="Total Messages"
          value="124"
          note="Conversation records"
        />
        <CommunicationStat
          icon={Mail}
          label="Unread"
          value="8"
          note="Require attention"
        />
        <CommunicationStat
          icon={CheckCheck}
          label="Replied"
          value="96"
          note="Resolved conversations"
        />
        <CommunicationStat
          icon={Clock3}
          label="Pending Reply"
          value="12"
          note="Awaiting response"
        />
      </section>

      <section className="mt-6">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-[#0B1B3A]">
            Recent Messages
          </h2>
          <CommunicationSearch placeholder="Search messages..." />
        </div>

        <CommunicationTable
          columns={[
            "Subject",
            "User",
            "Channel",
            "Status",
            "Received",
            "Action",
          ]}
        >
          {messages.map((message) => (
            <tr
              key={`${message.subject}-${message.person}`}
              className="border-b border-slate-100 last:border-b-0"
            >
              <td className="px-5 py-4">
                <p className="text-sm font-semibold text-slate-800">
                  {message.subject}
                </p>
              </td>

              <td className="px-5 py-4">
                <CommunicationPerson name={message.person} />
              </td>

              <td className="px-5 py-4">
                <CommunicationChannel channel={message.channel} />
              </td>

              <td className="px-5 py-4">
                <CommunicationStatusCell
                  label={message.status}
                  tone={message.tone}
                />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600">
                {message.date}
              </td>

              <td className="px-5 py-4">
                <CommunicationAction href="/communications/messages" />
              </td>
            </tr>
          ))}
        </CommunicationTable>
      </section>
    </AdminPage>
  );
}
