import { UtilityItem, ColorPreset } from "./types";

export const DEFAULT_ITEMS: UtilityItem[] = [
  {
    id: "1",
    label: "CRE support",
    link: "https://cre-support.example.com",
    iconName: "Building",
  },
  {
    id: "2",
    label: "HR support",
    link: "https://hr-support.example.com",
    iconName: "Users",
  },
  {
    id: "3",
    label: "IT support",
    link: "https://it-support.example.com",
    iconName: "LifeBuoy",
  },
  {
    id: "4",
    label: "R&A",
    link: "https://ra-analytics.example.com",
    iconName: "TrendingUp",
  },
  {
    id: "5",
    label: "my chevron",
    link: "https://chevron-portal.example.com",
    iconName: "Compass",
  },
  {
    id: "6",
    label: "workday",
    link: "https://workday.example.com",
    iconName: "Briefcase",
  },
];

export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: "staffbase",
    name: "Staffbase Blue",
    bgColor: "#ffffff",
    textColor: "#1a2530",
    iconColor: "#0055cb",
    hoverBgColor: "#f1f5fa",
  },
  {
    id: "royal_navy",
    name: "Royal Navy",
    bgColor: "#0f172a",
    textColor: "#f8fafc",
    iconColor: "#38bdf8",
    hoverBgColor: "#1e293b",
  },
  {
    id: "forest_mint",
    name: "Forest Mint",
    bgColor: "#f0fdf4",
    textColor: "#14532d",
    iconColor: "#16a34a",
    hoverBgColor: "#dcfce7",
  },
  {
    id: "slate_minimal",
    name: "Slate Minimal",
    bgColor: "#f8fafc",
    textColor: "#334155",
    iconColor: "#475569",
    hoverBgColor: "#edf2f7",
  },
  {
    id: "sunset_orange",
    name: "Sunset Glow",
    bgColor: "#fff7ed",
    textColor: "#7c2d12",
    iconColor: "#ea580c",
    hoverBgColor: "#ffedd5",
  },
  {
    id: "neo_dark",
    name: "Brutalist Dark",
    bgColor: "#121212",
    textColor: "#e0e0e0",
    iconColor: "#10b981",
    hoverBgColor: "#1f1f1f",
  },
];

export const AVAILABLE_ICONS = [
  { name: "Building", label: "Building (CRE/Facilities)" },
  { name: "Users", label: "Users (HR/Staff)" },
  { name: "LifeBuoy", label: "LifeBuoy (IT Support)" },
  { name: "TrendingUp", label: "TrendingUp (R&A Analytics)" },
  { name: "Compass", label: "Compass (my chevron)" },
  { name: "Briefcase", label: "Briefcase (Workday/Jobs)" },
  { name: "Heart", label: "Heart (Health/Wellness)" },
  { name: "Cpu", label: "Cpu (IT/Tech)" },
  { name: "Laptop", label: "Laptop (Device/IT)" },
  { name: "Files", label: "Files (R&A/Docs)" },
  { name: "Calendar", label: "Calendar (Workday/Sche)" },
  { name: "Shield", label: "Shield (Security/Legal)" },
  { name: "DollarSign", label: "DollarSign (Finance)" },
  { name: "Settings", label: "Settings (Admin)" },
  { name: "Award", label: "Award (Achievements)" },
  { name: "HelpCircle", label: "HelpCircle (Support)" },
  { name: "Mail", label: "Mail (Communications)" },
  { name: "Bell", label: "Bell (Notifications)" },
  { name: "Link", label: "Link (Portal)" },
];
