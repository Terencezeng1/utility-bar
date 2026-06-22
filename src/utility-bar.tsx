import React, { ReactElement, useState } from "react";
import LucideIcon from "./components/LucideIcon";
import { UtilityItem } from "./types";

export interface UtilityBarProps {
  items: UtilityItem[];
  bgcolor: string;
  textcolor: string;
  iconcolor: string;
  hoverbgcolor: string;
  fontsize: "xs" | "sm" | "base" | "lg";
  barheight: "base" | "slim" | "extraslim";
  showdividers: boolean;
  showsubtitles: boolean;
  openinnewtab: boolean;
  jsonError?: string | null;
  contentLanguage?: string;
}

export const UtilityBar = ({
  items,
  bgcolor,
  textcolor,
  iconcolor,
  hoverbgcolor,
  fontsize,
  barheight,
  showdividers,
  showsubtitles,
  openinnewtab,
  jsonError,
}: UtilityBarProps): ReactElement => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (jsonError) {
    return (
      <div
        style={{
          padding: "16px",
          backgroundColor: "#fef2f2",
          color: "#991b1b",
          border: "2px dashed #f87171",
          borderRadius: "12px",
          fontSize: "13px",
          fontFamily: "sans-serif",
        }}
      >
        <strong style={{ display: "block", marginBottom: "4px" }}>
          ⚠️ JSON Formatting Alert
        </strong>
        <span>
          {jsonError}. Please check your commas and straight quotation marks.
        </span>
      </div>
    );
  }

  // Determine padding based on the layout density option selected
  const getContainerPadding = () => {
    if (barheight === "extraslim") return "4px 16px";
    if (barheight === "slim") return "8px 16px";
    return "16px";
  };

  const getItemPadding = () => {
    if (barheight === "extraslim") return "4px 8px";
    if (barheight === "slim") return "8px 12px";
    return "16px 8px";
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: bgcolor || "#0f172a",
    color: textcolor || "#f8fafc",
    padding: getContainerPadding(),
    borderRadius: "12px",
    fontFamily: "sans-serif",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${items?.length || 1}, minmax(0, 1fr))`,
    width: "100%",
    borderRadius: "8px",
    overflow: "hidden",
  };

  // If slim or extra slim is selected, use side-by-side alignment to match the mockup
  const isInlineLayout = barheight === "slim" || barheight === "extraslim";

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {(items || []).map((item, idx) => {
          const activeIcon = item.iconName || (item as any).iconname || "Link";
          const isItemHovered = hoveredIndex === idx;

          return (
            <a
              key={item.id || idx}
              href={item.link}
              target={openinnewtab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "flex",
                flexDirection: isInlineLayout ? "row" : "column",
                alignItems: "center",
                justifyContent: "center",
                gap: isInlineLayout ? "12px" : "8px",
                padding: getItemPadding(),
                textDecoration: "none",
                color: "inherit",
                fontSize:
                  fontsize === "xs"
                    ? "12px"
                    : fontsize === "sm"
                      ? "14px"
                      : "16px",
                borderRight:
                  showdividers && idx < items.length - 1
                    ? "1px solid currentColor"
                    : "none",
                backgroundColor: isItemHovered
                  ? hoverbgcolor || "#1e293b"
                  : "transparent",
                transition: "background-color 0.15s ease-in-out",
              }}
            >
              <span
                style={{
                  color: iconcolor || "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LucideIcon name={activeIcon} size={isInlineLayout ? 18 : 20} />
              </span>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isInlineLayout ? "flex-start" : "center",
                }}
              >
                <span style={{ fontWeight: 600 }}>{item.label}</span>
                {showsubtitles && item.link && (
                  <span
                    style={{ fontSize: "10px", opacity: 0.6, marginTop: "1px" }}
                  >
                    {item.link.replace(/^https?:\/\//i, "").split("/")[0]}
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
