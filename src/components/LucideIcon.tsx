import {
  Building,
  Users,
  LifeBuoy,
  TrendingUp,
  Compass,
  Briefcase,
  Heart,
  Cpu,
  Laptop,
  Files,
  Calendar,
  Shield,
  DollarSign,
  Settings,
  Award,
  HelpCircle,
  Mail,
  Bell,
  Link as LinkIcon,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Plus,
  Trash2,
  Edit2,
  Settings as SettingsGear,
  Download,
  Copy,
  Check,
  Smartphone,
  Tablet,
  Monitor,
  Maximize2,
  Minimize2,
  Grid,
  Info,
  ExternalLink,
} from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  strikeColor?: string;
}

export default function LucideIcon({
  name,
  className = "",
  size = 20,
  strikeColor,
}: LucideIconProps) {
  const iconProps = {
    className,
    size,
    ...(strikeColor ? { stroke: strikeColor } : {}),
  };

  switch (name) {
    case "Building":
      return <Building {...iconProps} />;
    case "Users":
      return <Users {...iconProps} />;
    case "LifeBuoy":
      return <LifeBuoy {...iconProps} />;
    case "TrendingUp":
      return <TrendingUp {...iconProps} />;
    case "Compass":
      return <Compass {...iconProps} />;
    case "Briefcase":
      return <Briefcase {...iconProps} />;
    case "Heart":
      return <Heart {...iconProps} />;
    case "Cpu":
      return <Cpu {...iconProps} />;
    case "Laptop":
      return <Laptop {...iconProps} />;
    case "Files":
      return <Files {...iconProps} />;
    case "Calendar":
      return <Calendar {...iconProps} />;
    case "Shield":
      return <Shield {...iconProps} />;
    case "DollarSign":
      return <DollarSign {...iconProps} />;
    case "Settings":
      return <Settings {...iconProps} />;
    case "Award":
      return <Award {...iconProps} />;
    case "HelpCircle":
      return <HelpCircle {...iconProps} />;
    case "Mail":
      return <Mail {...iconProps} />;
    case "Bell":
      return <Bell {...iconProps} />;
    case "Link":
      return <LinkIcon {...iconProps} />;
    case "Menu":
      return <Menu {...iconProps} />;
    case "X":
      return <X {...iconProps} />;
    case "ChevronDown":
      return <ChevronDown {...iconProps} />;
    case "ChevronUp":
      return <ChevronUp {...iconProps} />;
    case "ChevronRight":
      return <ChevronRight {...iconProps} />;
    case "Plus":
      return <Plus {...iconProps} />;
    case "Trash2":
      return <Trash2 {...iconProps} />;
    case "Edit2":
      return <Edit2 {...iconProps} />;
    case "SettingsGear":
      return <SettingsGear {...iconProps} />;
    case "Download":
      return <Download {...iconProps} />;
    case "Copy":
      return <Copy {...iconProps} />;
    case "Check":
      return <Check {...iconProps} />;
    case "Smartphone":
      return <Smartphone {...iconProps} />;
    case "Tablet":
      return <Tablet {...iconProps} />;
    case "Monitor":
      return <Monitor {...iconProps} />;
    case "Maximize2":
      return <Maximize2 {...iconProps} />;
    case "Minimize2":
      return <Minimize2 {...iconProps} />;
    case "Grid":
      return <Grid {...iconProps} />;
    case "Info":
      return <Info {...iconProps} />;
    case "ExternalLink":
      return <ExternalLink {...iconProps} />;
    default:
      return <LinkIcon {...iconProps} />;
  }
}
