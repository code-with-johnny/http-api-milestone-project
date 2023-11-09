# HTTP & API Milestone Project

An HTTP & API project template for the software developer roadmap.

We return to Joseph The Cat's portfolio to create make some HTTP requests to our own API, built with express.

## Getting Started

To get started on this project, run the following command in your terminal.

```
git clone git@github.com:code-with-johnny/http-api-milestone-project.git && cd http-api-milestone-project
```

Run the `npm install` command to install the project's dependencies.

If you open up the project in vscode, you should see three new files: `fetch-cat-data.js` in the `scripts` directory, and `server.js` and `cat-data.json` in the root directory. The new `js` file is already linked to `index.html`.

We'll be running the web page as usual, but now that we also have an API, there's a script added to the `package.json` that will allow us to start our server with the `npm start` command. At the moment though, the command does nothing as there's no code in `server.js`. That part is for you to complete.

## Requirements

1. Your API (server.js) needs to have three endpoints (routes). The base url for your API is http://localhost:8080 (or whatever port number you choose, should be different than the one you're using to run the web page in the browser).
   1. The first route will be `$BASE_URL/cat-data`. This route should accept a GET request and respond with the array of cat objects from `cat-data.json`. The json file can be loaded and parsed using the built-in `fs` module and `JSON` object.
   2. The second route is `$BASE_URL/email-subscribe`. This route will accept a POST request and respond to the client with a 400 status code if there is no email address in the request body, otherwise a 200 response will be sent back.
   3. The third route is `$BASE_URL/contact`. This route will accept a POST request and repsond to the client with a 400 status code if there is no message, name, or email address in the request body, otherwise a 200 response will be sent back.
2. Instead of hard-coding all the cat data in your html file, you will now use the `fetch-cat-data.js` to make a GET request to your `/cat-data` endpoint using axios (axios isn't in the `package.json`'s dependencies because it's being loaded as an external script in the html file). Once you've received the cat data from the API, you will then populate the cat comparison table with that data using javascript (`document.createElement` will be your friend here). Both the column headers and each data row should be populated based on what is received from the API. You should consider 3 states when fetching data from an API--loading, error, and success--and handle them accordingly.
3. In your `form-handlers.js` file, once a form is submitted, an alert is shown to the user with information about their form submission. From a user's perspective, nothing will change, you'll still show them the alert. However, behind the scenes, you're first going to make a POST request to the respective endpoint for each form, and only upon receiving a successful response (200 status code) will you alert the user.
4. HINT: Keep in mind that to enable the front-end (browser) to "talk" with your API, you will need to enable CORS (cross-origin resource sharing). You can read about express middleware to enable cors in your application. You will also need another middleware to be able to read the request body for your `/email-subscribe` and `/contact` endpoints due to the version of express used in this project.

## Example

You can (click here)[todo] to see an example of what the project should look like.

## Solution

If you're having trouble completing this project or you want to compare your solution to mine then you can view the solution.

You'll need to use git and switch to a branch named `solution`.

```
git fetch --all
git checkout solution
```

Once you do that, your code editor should update and you can view the `fetch-cat-data.js` and `form-handlers.js` files, as well as the API logic in `server.js`.

Please only do this if you've given it your best shot, otherwise you're only cheating yourself.

Keep in mind that there are many ways to achieve such a solution. My way is definitely not the best, and, in my opinion, no one's ever is. A lot of a solution comes down to personal preference and style as well as finding what works.
