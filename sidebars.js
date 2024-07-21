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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: ["introduction"],
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
        description: "有如下类型的payload",
      },
      items: [
        {
          label: "User",
          type: "category",
          description: "用户发起的事件或动作",
          link: {
            type: "doc",
            id: "User/User",
          },
          items: ["User/User Login", "User/User Event", "User/User Action"],
        },
        {
          label: "Service",
          type: "category",
          description: "Service发起的事件或动作",
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
          description: "Moobius发起的事件或动作",
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

export default sidebars;
