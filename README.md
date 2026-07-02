# template-webpack

This is an empty template project using webpack with 'webpack-merge' to split webpack configuration in different files. It handles HTML, CSS, JS and images, with base files already created and linked.  
Ready to run a local server and deploy in production mode. 

### Scripts
`npm run build` - to deploy.

`npm run dev` - to start server.  
Find your site in locally via http://localhost:8080/ by default.

### Installed packages
* webpack webpack-cli
* html-webpack-plugin
* style-loader css-loader
* html-loader
* webpack-dev-server
* webpack-merge

Modify `webpack.common.js` file to add/remove/manipulate any plugins/modules.