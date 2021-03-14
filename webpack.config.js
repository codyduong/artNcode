module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: {
    // cubes: './webpack/cubes.js',
    // cubes2: './webpack/cubes2.js',
    cubes3: './webpack/cubes3.js',
    rocketdev: './webpack/rocket.js',
  },
  output: {
    path: __dirname + "assets/javascripts/",
    filename: "[name].js",
    publicPath: __dirname + "assets/javascripts/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      }
    ]
  },
  mode: 'production'
};