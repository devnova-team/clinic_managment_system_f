import { cn } from "@/lib/cn";
type IconColor = "primary" | "secondary" | "disabled" | "white" | "alt"|'danger';
import { Icon as IconifyIcon } from "@iconify/react";
interface BaseIconProps {
  size?: number;
  color?: IconColor;
  className?: string;
}

//for Component icons: lucide-react, @tabler/icons-react
interface ComponentIconProps extends BaseIconProps {
  IconComponent: React.ComponentType<{ size?: number; className?: string }>;
  name?: never;
}

//string-name icons : iconify
interface IconifyIconProps extends BaseIconProps {
  name: string;
  IconComponent?: never;
}

export type IconProps = ComponentIconProps | IconifyIconProps;

const variants: Record<IconColor, string> = {
  primary: "ds-text-primary",
  secondary: "ds-text-secondary",
  disabled: "ds-text-disabled",
  white: "text-white",
  alt: "ds-text-alt",
  danger:'text-red-700'
};

const Icon = ({ size = 24, color = "primary", className, ...rest }: IconProps) => {
  const classes = cn(variants[color], className);

  // Iconify
  if ("name" in rest && rest.name) {
    return <IconifyIcon icon={rest.name} width={size} height={size} className={classes} />;
  }
  // Component path: lucide / tabler
  const { IconComponent } = rest as ComponentIconProps;
  return <IconComponent size={size} className={classes} />;
};
export default Icon;
