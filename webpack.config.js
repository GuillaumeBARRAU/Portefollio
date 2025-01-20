const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Définir le mode (development ou production)
  entry: "./src/index.js", // Point d'entrée principal de React
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Nettoie automatiquement le dossier de sortie avant chaque build
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Gestion des fichiers JS et JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpilation avec Babel
        },
      },
      {
        test: /\.css$/, // Gestion des fichiers CSS
        use: ["style-loader", "css-loader"], // Appliquer CSS au DOM
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Gestion des images
        type: "asset/resource", // Copier automatiquement les fichiers dans le dossier de sortie
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Résolution des extensions par défaut
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Point d'entrée HTML
    }),
  ],
  devServer: {
    static: "./dist", // Servir les fichiers depuis le dossier dist
    port: 3000, // Définir le port du serveur
    open: true, // Ouvrir automatiquement le navigateur
    hot: true, // Activer le rechargement à chaud
  },
};
