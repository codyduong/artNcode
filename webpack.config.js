const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: {
    // cubes: './src/examples/cubes.js',
    // cubes2: './src/examples/cubes2.js',
    // cubes3: './src/examples/cubes3.js',
    RepoDisplay: './src/code/RepoDisplay.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    path: __dirname + "/assets/javascripts/",
    publicPath: String(ASSET_PATH) + "artNcode/assets/javascripts/",
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/, ///\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader', //'babel-loader',
        // options: {
        //   presets: [
        //     '@babel/react', '@babel/preset-env'
        //   ],
        //   plugins: [
        //     "@babel/plugin-proposal-class-properties"
        //   ]
        // }
      },
    ]
  },
  mode: 'production'
};