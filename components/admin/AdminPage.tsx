import type { LucideIcon } from "lucide-react";

type AdminPageProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
};

export default function AdminPage({
  eyebrow,
  title,
  description,
  icon: Icon,
  children,
}: AdminPageProps) {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <div className="flex items-start gap-4">
          {Icon ? (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7FA] text-[#0E8EAF]">
              <Icon className="h-6 w-6" />
            </div>
          ) : null}

          <div className="min-w-0">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0E8EAF]">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#0B1B3A] sm:text-3xl">
              {title}
            </h1>

            {description ? (
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}
