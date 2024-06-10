import React from "react";
import { Card, CardContent } from "../ui/card";
import { Newspaper } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="flex-1 bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className=" text-center text-2xl font-bold text-slate-500 dark:text-slate-200 mb-4">
          {title || "Title"}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon || (
            <Newspaper
              className="text-slate-500 dark:text-primary-400"
              size={56}
            />
          )}
          <h3 className="text-2xl font-semibold text-slate-500 dark:text-slate-200">
            {count || 0}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
