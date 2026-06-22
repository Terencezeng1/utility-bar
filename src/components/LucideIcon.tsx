import React from "react"; // 👈 CRITICAL FIX: Prevents the "React is not defined" runtime crash
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export default function LucideIcon({
  name,
  size = 20,
  color,
  className,
}: LucideIconProps) {
  // Dynamically look up the icon component using the string name provided by the user schema
  const IconComponent = (Icons as any)[name];

  // Fallback check: If an administrator types an invalid icon name, default safely to a generic Link graphic
  if (!IconComponent) {
    const FallbackComponent = Icons.Link;
    return (
      <FallbackComponent size={size} color={color} className={className} />
    );
  }

  return <IconComponent size={size} color={color} className={className} />;
}
