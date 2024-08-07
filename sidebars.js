/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  introduction: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction",
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      link: {
        type: "generated-index",
      },
      items: ["docs/Installation", "docs/Usage"],
    },
    {
      type: "category",
      label: "Method References",
      link: {
        type: "doc",
        id: "Methods",
      },
      items: ["docs/Auth", "docs/Channel", "docs/User", "docs/Send"],
    },
  ],
  Communication: [
    {
      type: "doc",
      label: "Communication Codes",
      id: "Communication",
    },
    {
      type: "category",
      label: "Type",
      link: {
        type: "generated-index",
        description: "Payload listed as follow",
      },
      items: [
        {
          label: "User",
          type: "category",
          description: "Initiated by User",
          link: {
            type: "doc",
            id: "User/User",
          },
          items: ["User/User Login", "User/User Event", "User/User Action"],
        },
        {
          label: "Service",
          type: "category",
          description: "Initiated by Service",
          link: {
            type: "doc",
            id: "Service/Service",
          },
          items: [
            "Service/Service Login",
            "Service/Service Event",
            "Service/Service Action",
          ],
        },
        {
          label: "Moobius",
          type: "category",
          description: "Initiated by Moobius",
          link: {
            type: "doc",
            id: "Moobius/Moobius",
          },
          items: ["Moobius/copy"],
        },
      ],
    },
    {
      type: "doc",
      label: "Use Case Logic",
      id: "Use Case Logic",
    },
  ],
};
