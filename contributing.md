# Contributing to wd-selenium-hooks

Below are a few ways to make contributing to `wd-selenium-hooks` smoother.

## Issues

When opening an issue for a bug, please include steps for reproducing the problem. _If we can't reproduce it, we can't fix it_. If you are suggesting a new feature, please provide a clear and detailed explanation.

## Setup

    git clone https://github.com/wilmoore/node-wd-selenium-hooks.git
    cd node-wd-selenium-hooks
    npm install
    npm run dev

## Tests

If you are adding a new feature, please include tests. The test suite for this project uses [tape]. To run the test suite, type `npm test`. You may also run the development watcher (`npm run dev`) which uses [nodemon] to re-run the test suite when files are modified. You can also get the raw tap output by running `node test`.

## Style

To keep a consistent coding style in the project, we're using [JavaScript Standard Style].

```shell
npm run standard
```
> This command will be run automatically with `npm run dev`; however, you can run it on-demand as necessary.

## Dependencies

To ensure that (1) we are not depending on uninstalled packages and (2) we haven't installed any unused packaged, we're using [dependency-check].

```shell
npm run dependency-check
```
> This command will be run automatically with `npm run dev`; however, you can run it on-demand as necessary.

## Package

To keep a consistent `package.json`, we're using [`fixpack`].

```shell
npm run fixpack
```

## Commits

When submitting pull requests please add a [well-written and clear commit message] and squash your commits. This means being familiar with [interactive rebasing].

[dependency-check]: https://www.npmjs.com/package/dependency-check
[`fixpack`]: https://www.npmjs.com/package/fixpack
[JavaScript Standard Style]: http://standardjs.com
[nodemon]: http://nodemon.io
[interactive rebasing]: https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase-i
[tape]: https://github.com/substack/tape
[well-written and clear commit message]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
