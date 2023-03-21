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
    defaultValue: null,
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: null, title: 'none' },
        'light',
        'dark',
        'primary',
        'secondary',
        'success',
        'info',
        'danger',
        'warning',
      ],
      name: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (story, { globals: { theme } }) => {
    return <div className={cn('p-3', theme && `bg-${theme}`)}>{story()}</div>;
  },
];
