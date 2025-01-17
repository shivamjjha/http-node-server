# HTTP NodeJS Server
Usually, you would use [**Express** ](https://expressjs.com/) when dealing with server-side stuff inside your NodeJS application. But it is never bad to build your own little server to see how stuff happens, without actually using [**Express** ](https://expressjs.com/).
## Directories and Files
- **/public:** directory containing files to be served.
    - There are two `html` files available for demonstration: `/public/about.html` and `/public/index.html`. Also, `/public/404.html` to handle a query not found on the server.
    - Stylesheets can be modified inside `/public/css` directory
- **/index.js:** code for the server.

## Starting server
1. First run `npm i` inside the root directory of this repository.
2. Then `npm start` to fire up the server.
2.1 You can use `npm run dev` to start a development server and let [**nodemon**](https://nodemon.io/) handle the server refreshing by itself, so that you don't have to stop and restart the server manually every time you make a change. 
3. Then, go to `http://localhost:5000/` inside your browser for `index.html` page. Make changes in `/index.js` file for this. You can also add other files in `/public` directory and server them using `/index.js`