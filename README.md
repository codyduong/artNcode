Built with Jekyll and React yeeted in with Webpack.

Why? Because I'm a masochist and refuse to do any styling myself, so I injected React into Jekyll rather than recreate this website from
the ground up.

Development Commands for me:

React Development
```
$env:NODE_ENV="development"
npm install --only=dev
npm start
```

Production (webpacking and Jekyll Build)
```
$env:NODE_ENV="production"
npm install --only=prod
webpack
bundle exec jekyll serve
```
