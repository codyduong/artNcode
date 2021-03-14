Built with Jekyll and React put in with Webpack.

Why? Because I'm a masochist and refuse to do any CSS styling myself. 
So I smashed React into my Jekyll website with a hammer, and have lots of regret.

# React Development [http://localhost:3000/]
This will provide a dynamic local testing space to test React in.
```
$env:NODE_ENV="development"
npm install --only=dev
npm start
```

# "Production" (Webpacking and Jekyll Build) [http://localhost:4000/]
This will provide an environment to change Jekyll in real-time (as well as the overall structure of the website), 
but not the React (unless you want to webpack it each time, ~10 seconds per pack). 
```
$env:NODE_ENV="production"
npm install --only=prod
webpack
bundle exec jekyll serve
```
