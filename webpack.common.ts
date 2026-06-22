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

import * as webpack from "webpack";

const config: webpack.Configuration = {
  entry: {
    // 🚀 CACHE BUSTER FIX: Appended -v2 to force Staffbase to pull the absolute latest build
    "staffbase.utility-bar-v3": "./src/index.tsx",
  },
  module: {
    rules: [
      // 1. Clear the strict ESM extension pathing rule for node_modules
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: /.*\/node_modules/,
      },
      // 2. Standard SVGs: Convert into React Components (EXCLUDES your icon)
      {
        test: /\.svg$/i,
        exclude: /utility-bar\.svg$/, // Prevents loader collision
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
      // 3. Widget Icon SVG: Convert into a clean URL string for Staffbase Studio
      {
        test: /utility-bar\.svg$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
};

export default config;
