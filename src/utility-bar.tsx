/*!
 * Copyright 2026, Staffbase SE and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react";
import LucideIcon from "./components/LucideIcon";
import { UtilityItem } from "./types";

/**
 * We define a clean interface for our component properties.
 * Decoupling this from the SDK's base block attributes eliminates
 * the primitive index signature errors completely.
 */
export interface UtilityBarProps {
  items: UtilityItem[];
  bgcolor: string;
  textcolor: string;
  iconcolor: string;
  hoverbgcolor: string;
  fontsize: "xs" | "sm" | "base" | "lg";
  showdividers: boolean;
  showsubtitles: boolean;
  openinnewtab: boolean;
  contentLanguage?: string;
}

export const UtilityBar = ({
  items,
  bgcolor,
  textcolor,
  iconcolor,
  hoverbgcolor,
  fontsize,
  showdividers,
  showsubtitles,
  openinnewtab,
}: UtilityBarProps): ReactElement => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: bgcolor || "#0f172a",
    color: textcolor || "#f8fafc",
    padding: "16px",
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

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {(items || []).map((item, idx) => {
          // Bypasses properties casing mismatches safely between schema data layouts
          const activeIcon = item.iconName || (item as any).iconname || "Link";

          return (
            <a
              key={item.id || idx}
              href={item.link}
              target={openinnewtab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "16px 8px",
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
              }}
            >
              {/* Wraps the icon in a styled element to pass the custom accent color down cleanly */}
              <span
                style={{
                  color: iconcolor || "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LucideIcon name={activeIcon} size={20} />
              </span>
              <span style={{ fontWeight: 600 }}>{item.label}</span>
              {showsubtitles && (
                <span style={{ fontSize: "10px", opacity: 0.6 }}>
                  {item.link
                    ? item.link.replace(/^https?:\/\//i, "").split("/")[0]
                    : ""}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};
