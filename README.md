
# Node Website In a Node Library Package

## Overview

Just playing around with Node.js, for the sake of preparing for some related project work. This this first time I've made a web app with node; before this, I've only used it for Web APIs and console apps.

I began with the Express Generator, which created some of the file structure. It also generated some of the boilerplate files (e.g., `./bin/www`, `app.js`... though I later refactored `app.js`).

The idea is to put an entire site, except for configuration, in a node package. It's a POC for something I'm doing at work. I don't expect anyone to actually use this.

## Usage

* Create an empty folder.
* Run `npm init`. You can accept all defaults.
* Install `node-web-lib`.
* Add a `.env` file with the following contents to the folder:

  ``` javascript
  APP_NAME=MyGreatWebsite
  ```

* Add an `index.js` file with the following contents to the folder:

  ``` javascript
  const runsite = require('node-web-lib');
  runsite();
  ```

* Execute the following command:

  ``` bash
  node index
  ```

* Browse the site at `http://127.0.0.1:3000`

## Versioning

We use [SemVer](http://semver.org/) for versioning.
