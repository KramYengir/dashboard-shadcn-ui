import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-wrap md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={562}
          icon={
            <Newspaper
              className="text-slate-500 dark:text-primary-400"
              size={32}
            />
          }
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={
            <Folder
              className="text-slate-500 dark:text-primary-400"
              size={32}
            />
          }
        />
        <DashboardCard
          title="Users"
          count={251}
          icon={
            <User className="text-slate-500 dark:text-primary-400" size={32} />
          }
        />
        <DashboardCard
          title="Comments"
          count={864}
          icon={
            <MessageCircle
              className="text-slate-500 dark:text-primary-400"
              size={32}
            />
          }
        />
      </div>
    </>
  );
}
