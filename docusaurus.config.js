// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import remarkMath from "remark-math";
import configTabs from "./src/remark/configTabs.js";
import PrismDark from "./src/utils/prismDark";
import PrismLight from "./src/utils/prismLight";
import versions from "./versions.json";
function isPrerelease(version) {
  return (
    version.includes("-") ||
    version.includes("alpha") ||
    version.includes("beta") ||
    version.includes("rc")
  );
}
function getLastStableVersion() {
  const lastStableVersion = versions.find((version) => !isPrerelease(version));
  if (!lastStableVersion) {
    throw new Error("unexpected, no stable Docusaurus version?");
  }
  return lastStableVersion;
}
function getLastStableVersionTuple() {
  const lastStableVersion = getLastStableVersion();
  const parts = lastStableVersion.split(".");
  if (parts.length !== 3) {
    throw new Error(`Unexpected stable version name: ${lastStableVersion}`);
  }
  return [parts[0], parts[1], parts[2]];
}
function getAnnouncedVersion() {
  const [major, minor] = getLastStableVersionTuple();
  return `${major}.${minor}`;
}
const announcedVersion = getAnnouncedVersion();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Moobius API",
  tagline: "Quick access to Moobius communication protocol",
  favicon: "img/favicon.ico",
  trailingSlash: true,
  githubHost: "git@github.com-yhcss3:groupultra/agent-api-sdk-document.git",
  // Set the production url of your site here
  url: "https://groupultra.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/agent-api-sdk-document/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "groupultra", // Usually your GitHub org/user name.
  projectName: "agent-api-sdk-document", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, configTabs],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  customFields: {
    announcedVersion,
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Moobius API",
        logo: {
          alt: "My Site Logo",
          src: "img/Logo-light.png",
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "introduction",
            label: "Docs",
          },
          {
            to: "/http-api",
            position: "left",
            label: "Http API",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "Communication",
            label: "Communication Codes",
          },
          {
            href: "https://github.com/groupultra",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs",
              },
              {
                label: "HTTP API",
                to: "/http-api",
              },
              {
                label: "Communication Codes",
                to: "/docs/Communication",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/za77wbZTun",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/groupultra",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Moobius, Inc.`,
      },
      prism: {
        theme: PrismLight,
        darkTheme: PrismDark,
        additionalLanguages: [
          "javascript",
          "latex",
          "haskell",
          "matlab",
          "PHp",
          "powershell",
          "bash",
          "diff",
          "json",
          "scss",
        ],
      },
    }),
};

export default config;
