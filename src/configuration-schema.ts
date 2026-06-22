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
  required: ["linksjson"],
  properties: {
    linksjson: {
      type: "string",
      title: "Navigation Links (JSON Array Format)",
      description:
        "Modify your navigation portals below. Ensure valid JSON structure is maintained.",
      default: JSON.stringify(
        [
          {
            id: "1",
            label: "IT Help Desk",
            link: "https://google.com",
            iconName: "LifeBuoy",
          },
          {
            id: "2",
            label: "HR Portal",
            link: "https://google.com",
            iconName: "User",
          },
          {
            id: "3",
            label: "Company Handbook",
            link: "https://google.com",
            iconName: "BookOpen",
          },
        ],
        null,
        2,
      ),
    },
    bgcolor: {
      type: "string",
      title: "Widget Background Color",
      format: "color",
      default: "#0f172a",
    },
    textcolor: {
      type: "string",
      title: "Label Text Color",
      format: "color",
      default: "#f8fafc",
    },
    iconcolor: {
      type: "string",
      title: "Icon Accent Color",
      format: "color",
      default: "#3b82f6",
    },
    hoverbgcolor: {
      type: "string",
      title: "Hover Highlight Color",
      format: "color",
      default: "#1e293b",
    },
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
    "linksjson",
    "bgcolor",
    "textcolor",
    "iconcolor",
    "hoverbgcolor",
    "fontsize",
    "showdividers",
    "showsubtitles",
    "openinnewtab",
  ],
  linksjson: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 8,
    },
  },
  fontsize: {
    "ui:widget": "select",
  },
};
