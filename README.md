# Ontimize Web QuickStart Source

This repository holds the TypeScript source code of the Ontimize Web QuickStart,
the foundation for most of the documentation samples and potentially a good starting point for your application.

**It exists primarily to get you started quickly with learning and prototyping in Angular**

We are ikely to accept suggestions about how to grow this QuickStart.
Please keep that in mind when posting issues and PRs.

## Prerequisites

Node.js and npm are essential to Ontimize Web and Angular development.

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/ontimizeweb/ontimize-web-ng2-quickstart  my-proj
cd my-proj
```

We have no intention of updating the source on `ontimizeweb/ontimize-web-ng2-quickstart`.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

### Create a new git repo
You could start writing code now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run postinstall`

The `npm start` command first compiles the application,
then simultaneously re-compiles and runs the server.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your application.

