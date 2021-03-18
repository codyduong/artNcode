module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: {
    // cubes: './src/examples/cubes.js',
    // cubes2: './src/examples/cubes2.js',
    //cubes3: './src/examples/cubes3.js',
    RepoDisplay: './src/code/RepoDisplay',
    RepoFlex: './src/code/RepoFlex',
    RepoLangBar: './src/code/RepoLangBar',
  },
  output: {
    path: __dirname + "/assets/javascripts/",
    filename: "[name].js",
    publicPath: __dirname + "/assets/javascripts/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/react', '@babel/preset-env'
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
        }
      }
    ]
  },
  mode: 'production'
};