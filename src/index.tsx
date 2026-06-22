/*!
 * Copyright 2026, Staffbase SE and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import ReactDOM from "react-dom/client";

import {
  BlockFactory,
  BlockDefinition,
  ExternalBlockDefinition,
  BaseBlock,
} from "widget-sdk";
import { UtilityBarProps, UtilityBar } from "./utility-bar";
import { configurationSchema, uiSchema } from "./configuration-schema";
import icon from "../resources/utility-bar.svg";
import pkg from "../package.json";

const widgetAttributes: string[] = [
  "fieldlabel",
  "linksjson",
  "bgcolor",
  "textcolor",
  "iconcolor",
  "hoverbgcolor",
  "fontsize",
  "showdividers",
  "showsubtitles",
  "openinnewtab",
];

const factory: BlockFactory = (BaseBlockClass, _widgetApi) => {
  return class UtilityBarBlock extends BaseBlockClass implements BaseBlock {
    private _root: ReactDOM.Root | null = null;

    public constructor() {
      super();
    }

    private get props(): UtilityBarProps {
      const attrs = this.parseAttributes<any>();

      // Safe evaluation parser: converts the text area input back into a clean array structure
      let parsedItems = [];
      try {
        parsedItems =
          typeof attrs.linksjson === "string"
            ? JSON.parse(attrs.linksjson)
            : [];
      } catch (e) {
        // Safe fallback fallback layout to prevent crashes if an administrator types broken JSON
        parsedItems = [
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
        ];
      }

      return {
        items: parsedItems,
        bgcolor: attrs.bgcolor,
        textcolor: attrs.textcolor,
        iconcolor: attrs.iconcolor,
        hoverbgcolor: attrs.hoverbgcolor,
        fontsize: attrs.fontsize || "sm",
        showdividers: attrs.showdividers !== false,
        showsubtitles: attrs.showsubtitles === true,
        openinnewtab: attrs.openinnewtab !== false,
        contentLanguage: this.contentLanguage,
      };
    }

    public renderBlock(container: HTMLElement): void {
      this._root ??= ReactDOM.createRoot(container);
      this._root.render(<UtilityBar {...this.props} />);
    }

    public static get observedAttributes(): string[] {
      return widgetAttributes;
    }

    public attributeChangedCallback(
      name: string,
      oldValue: string,
      newValue: string,
    ): void {
      super.attributeChangedCallback(name, oldValue, newValue);

      if (oldValue !== newValue) {
        this.renderBlock(this);
      }
    }
  };
};

const blockDefinition: BlockDefinition = {
  name: "utility-bar",
  factory: factory,
  attributes: widgetAttributes,
  blockLevel: "block",
  configurationSchema: configurationSchema,
  uiSchema: uiSchema,
  label: "Utility Bar",
  iconUrl: icon,
};

const externalBlockDefinition: ExternalBlockDefinition = {
  blockDefinition,
  author: pkg.author,
  version: pkg.version,
};

window.defineBlock(externalBlockDefinition);
