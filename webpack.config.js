const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const mode = process.env.NODE_ENV || 'development';

const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

const htmlPages = [
  'index.html',
  'blog.html',
  'contact.html',
  'news.html',
  'podcasts.html',
  'resources.html',
];

const htmlPlugins = htmlPages.map(page => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', page),
    filename: page,
    minify: {
      collapseWhitespace: !devMode,
    },
  });
});

module.exports = {
  mode,
  target,
  devtool,
  entry: [path.resolve(__dirname, 'src', 'scripts', 'main.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'main.[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
  ],
  devServer: {
    hot: true,
    open: true,
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode
            ? {
                loader: 'style-loader',
                options: { injectType: 'singletonStyleTag' },
              }
            : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: pathData => {
            const filepath = path.relative(
              path.join(__dirname, 'src'),
              pathData.filename
            );
            const topFolder = filepath.split(/[\/\\]/)[0];

            const filename = path.basename(pathData.filename);

            const filenameWithoutExt = filename.substring(
              0,
              filename.lastIndexOf('.')
            );
            const ext = filename.substring(filename.lastIndexOf('.'));

            return `${topFolder}/[hash:8]_${filenameWithoutExt}${ext}`;
          },
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[hash].[ext]',
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: 'defaults',
            presets: [['@babel/preset-env']],
          },
        },
      },
    ],
  },
};
