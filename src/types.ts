export interface UtilityItem {
  id: string;
  label: string;
  link: string;
  iconName: string; // Resolves to a Lucide icon
}

export interface WidgetConfig {
  items: UtilityItem[];
  bgColor: string;
  textColor: string;
  iconColor: string;
  hoverBgColor: string;
  spacingType: "equal" | "compact" | "spaced";
  openInNewTab: boolean;
  themeMode: "preset" | "custom";
  presetId: string;
  showDividers: boolean;
  showSubtitles: boolean;
  fontSize: "xs" | "sm" | "base" | "lg";
}

export interface ColorPreset {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
  hoverBgColor: string;
}
