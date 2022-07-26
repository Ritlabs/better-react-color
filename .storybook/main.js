module.exports = {
    addons: ["@storybook/addon-knobs", "@storybook/addon-options"],
    stories: ['../src/**/story.js'],
    framework: '@storybook/react',
    typescript: {
      check: false,
      checkOptions: {},
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      },
    },
  };