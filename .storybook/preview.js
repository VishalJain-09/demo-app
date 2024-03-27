import logiletheme from './logiletheme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default {
  parameters: {
    docs: {
      theme: logiletheme,
    },
  },
};
