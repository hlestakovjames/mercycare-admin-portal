import {
  Activity,
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardList,
  FileText,
  FolderKanban,
  HeartPulse,
  Home,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageSquare,
  Settings,
  ShieldCheck,
  Users,
  UserRoundCheck,
  WalletCards,
} from "lucide-react";

export type AdminNavigationItem = {
  name: string;
  href: string;
  icon: typeof Home;
  section?: string;
};

export const adminNavigation: AdminNavigationItem[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    section: "Overview",
  },

  {
    name: "Users",
    href: "/people/users",
    icon: Users,
    section: "People",
  },
  {
    name: "Clients & Care Recipients",
    href: "/people/clients",
    icon: HeartPulse,
  },
  {
    name: "Families & Caregivers",
    href: "/people/families",
    icon: UserRoundCheck,
  },
  {
    name: "Volunteers",
    href: "/people/volunteers",
    icon: Users,
  },
  {
    name: "Donors & Supporters",
    href: "/people/supporters",
    icon: WalletCards,
  },
  {
    name: "Staff",
    href: "/people/staff",
    icon: ShieldCheck,
  },

  {
    name: "Service Requests",
    href: "/care/service-requests",
    icon: ClipboardList,
    section: "Care & Services",
  },
  {
    name: "Active Services",
    href: "/care/services",
    icon: HeartPulse,
  },
  {
    name: "Appointments",
    href: "/care/appointments",
    icon: CalendarDays,
  },
  {
    name: "Care Records",
    href: "/care/records",
    icon: FileText,
  },
  {
    name: "Service Enquiries",
    href: "/care/enquiries",
    icon: Mail,
  },

  {
    name: "Messages",
    href: "/communications/messages",
    icon: MessageSquare,
    section: "Communications",
  },
  {
    name: "Enquiries",
    href: "/communications/enquiries",
    icon: Mail,
  },
  {
    name: "Notifications",
    href: "/communications/notifications",
    icon: Bell,
  },
  {
    name: "Announcements",
    href: "/communications/announcements",
    icon: Megaphone,
  },

  {
    name: "Events",
    href: "/events",
    icon: CalendarDays,
    section: "Events & Activities",
  },
  {
    name: "Activities",
    href: "/activities",
    icon: Activity,
  },
  {
    name: "Registrations",
    href: "/events/registrations",
    icon: ClipboardList,
  },
  {
    name: "Attendance",
    href: "/events/attendance",
    icon: UserRoundCheck,
  },

  {
    name: "Volunteer Applications",
    href: "/volunteers/applications",
    icon: ClipboardList,
    section: "Volunteers",
  },
  {
    name: "Opportunities",
    href: "/volunteers/opportunities",
    icon: Activity,
  },
  {
    name: "Assignments",
    href: "/volunteers/assignments",
    icon: FolderKanban,
  },
  {
    name: "Participation",
    href: "/volunteers/participation",
    icon: UserRoundCheck,
  },

  {
    name: "Donations",
    href: "/donations",
    icon: WalletCards,
    section: "Donations & Support",
  },
  {
    name: "Campaigns",
    href: "/donations/campaigns",
    icon: Megaphone,
  },
  {
    name: "Receipts",
    href: "/donations/receipts",
    icon: FileText,
  },

  {
    name: "News",
    href: "/content/news",
    icon: FileText,
    section: "Content",
  },
  {
    name: "Blog",
    href: "/content/blog",
    icon: FileText,
  },
  {
    name: "Resources",
    href: "/content/resources",
    icon: FolderKanban,
  },
  {
    name: "Gallery",
    href: "/content/gallery",
    icon: FolderKanban,
  },

  {
    name: "Reports",
    href: "/reports",
    icon: BarChart3,
    section: "Reports",
  },

  {
    name: "Staff & Roles",
    href: "/administration/staff-roles",
    icon: ShieldCheck,
    section: "Administration",
  },
  {
    name: "Permissions",
    href: "/administration/permissions",
    icon: ShieldCheck,
  },
  {
    name: "Audit Logs",
    href: "/administration/audit-logs",
    icon: ClipboardList,
  },
  {
    name: "Settings",
    href: "/administration/settings",
    icon: Settings,
  },
];
