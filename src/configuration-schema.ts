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
    useicons: {
      type: "boolean",
      title: "Enable Icons Globally",
      default: true,
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
      enum: ["xs", "small", "normal", "large"],
      default: "normal",
    },
    barheight: {
      type: "string",
      title: "Banner Layout Density",
      enum: ["normal", "slim", "extraslim"],
      default: "normal",
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
    "useicons",
    "bgcolor",
    "textcolor",
    "iconcolor",
    "hoverbgcolor",
    "fontsize",
    "barheight",
    "showdividers",
    "showsubtitles",
    "openinnewtab",
  ],
  linksjson: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 8,
    },
    // Injects the interactive information helper tooltip bubble right under the textbox container label
    "ui:help":
      'Lucide Icon Library is used to pull icons. Typing in camelCase format required e.g. "LifeBuoy" vs life-buoy',
  },
  fontsize: {
    "ui:widget": "select",
  },
  barheight: {
    "ui:widget": "select",
  },
};
