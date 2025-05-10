"use client";

import Avatar from "../avatar/avatar";
import AvatarFallback from "../avatar/avatar-fallback";
import AvatarImage from "../avatar/avatar-image";

export type AssetAvatarGroupProps = {
  max?: number;
};

export default function AssetAvatarGroup({ max = 4 }: AssetAvatarGroupProps) {
  const users = [
    { name: "Sophie Martin", image: "" },
    { name: "Leo Anderson", image: "" },
    { name: "Chloe Thompson", image: "" },
    { name: "Max Rodriguez", image: "" },
    { name: "Zoe Garcia", image: "" },
    { name: "Additional Users", count: 3 },
  ];

  return (
    <div className="flex items-center -space-x-2 *:ring-3 *:ring-bg-primary">
      {users.slice(0, max).map((user, index) => (
        <Avatar className="size-6 bg-utility-brand-500" key={index}>
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      ))}
      {users.length > max && (
        <Avatar className="size-6 z-10 text-sm font-medium bg-utility-brand-500">
          <AvatarFallback>
            +{users.slice(4).reduce((acc, user) => acc + (user.count || 1), 0)}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
