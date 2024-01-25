import { ReactNode } from "react";

interface NotificationActionsProps {
  children: ReactNode;
}

export function NotificationActions({
  children,
}: Readonly<NotificationActionsProps>) {
  return <div className="flex gap-2 self-center">{children}</div>;
}
