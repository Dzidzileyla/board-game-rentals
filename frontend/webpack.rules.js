module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  },
];
