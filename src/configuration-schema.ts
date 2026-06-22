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

import { UiSchema } from "@rjsf/utils";
import { JSONSchema7 } from "json-schema";

export const configurationSchema: JSONSchema7 = {
  type: "object",
  required: ["items"],
  properties: {
    // CONTENT SCHEMA SECTIONS
    items: {
      type: "array",
      title: "Portal Navigation Links",
      description:
        "Manage your support portals. You can append, modify, or delete elements cleanly.",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            title: "Item ID (Internal)",
          },
          label: {
            type: "string",
            title: "Portal Name / Label",
            default: "Support Portal",
          },
          link: {
            type: "string",
            title: "Destination Web Link (URL)",
            default: "https://portal.company.com",
          },
          iconname: {
            type: "string",
            title: "Lucide Icon Name",
            default: "Link",
          },
        },
      },
      // Sets default structural entries so the bar looks rich immediately upon placement
      default: [
        {
          id: "1",
          label: "IT Help Desk",
          link: "https://google.com",
          iconname: "LifeBuoy",
        },
        {
          id: "2",
          label: "HR Portal",
          link: "https://google.com",
          iconname: "User",
        },
        {
          id: "3",
          label: "Company Handbook",
          link: "https://google.com",
          iconname: "BookOpen",
        },
      ],
    },

    // STYLING PALETTE PARAMETERS
    bgcolor: {
      type: "string",
      title: "Widget Background color",
      format: "color",
      default: "#0f172a", // Matches Slate 900 theme default
    },
    textcolor: {
      type: "string",
      title: "Label Text Color",
      format: "color",
      default: "#f8fafc", // Matches Slate 50 contrast default
    },
    iconcolor: {
      type: "string",
      title: "Icon Accent Color",
      format: "color",
      default: "#3b82f6", // Matches Blue 500 default
    },
    hoverbgcolor: {
      type: "string",
      title: "Hover Highlight Color",
      format: "color",
      default: "#1e293b", // Matches Slate 800 default
    },

    // SIZING & PARAMS INTERFACE
    fontsize: {
      type: "string",
      title: "Widget Font Size",
      enum: ["xs", "sm", "base", "lg"],
      default: "sm",
    },
    showdividers: {
      type: "boolean",
      title: "Enable Vertical Dividers",
      default: true,
    },
    showsubtitles: {
      type: "boolean",
      title: "Show Portal Link Subtitles",
      default: false,
    },
    openinnewtab: {
      type: "boolean",
      title: "Open Links in New Tab",
      default: true,
    },
  },
};

export const uiSchema: UiSchema = {
  "ui:order": [
    "items",
    "bgcolor",
    "textcolor",
    "iconcolor",
    "hoverbgcolor",
    "fontsize",
    "showdividers",
    "showsubtitles",
    "openinnewtab",
  ],
  // Provides dropdown assistance for font selection strings
  fontsize: {
    "ui:widget": "select",
  },
};
