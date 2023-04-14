const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
      '@scss': path.resolve(__dirname, 'src/scss/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer', 'postcss-preset-env'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: true,
            },
          },
        ],
      },
    ],
  },
};
