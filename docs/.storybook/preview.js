/** @type { import('@storybook/react').Preview } */
// .storybook/preview.ts

// Replace your-framework with the framework you are using (e.g., react, vue3)
import { themes } from '@storybook/theming';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};


export default preview;
