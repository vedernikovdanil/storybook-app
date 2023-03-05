module.exports = {
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
          'sass-loader',
        ],
      },
    ],
  },
};
