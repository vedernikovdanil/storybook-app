import '../src/scss/index.scss';
import cn from 'classnames';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'auto',
    toolbar: {
      icon: 'circlehollow',
      items: [
        'auto',
        'light',
        'dark',
        'primary',
        'secondary',
        'success',
        'info',
        'danger',
        'warning',
      ],
      title: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (story, { globals: { theme } }) => {
    return <div className={cn('p-3', `bg-${theme}`)}>{story()}</div>;
  },
];
