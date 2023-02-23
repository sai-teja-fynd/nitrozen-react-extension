import React from "react";

export const Installation = () => {
  return (
    <div>Installation</div>
  );
};

export default {
  title: "Introduction/Installation",
  component: Installation,
  parameters: {
    options: { showPanel: false },
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};
