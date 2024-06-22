**:warning: The documentation above is written for romcal v2, and has not been updated yet to romcal v3.**

# Install, Build, Run and Test romcal Locally

This section describes how to run the romcal source code in your machine, and how to contribute to this project.
You might also be interested in reading the general [contribution guide](../CONTRIBUTING.md).

- [Retrieve the codebase](#retrieve-the-codebase)
- [Install](#install)
- [build](#build)
- [Run](#run)
- [Test](#test)
- [Coverage reporting](#coverage-reporting)

## Retrieve the Codebase

1. [Fork the repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository).

2. Clone your forked repo (Replace `github-username` by your GitHub username):

```bash
# Using SSH URL
git clone git@github.com:github-username/romcal.git

# Using HTTPS URL
git clone https://github.com/github-username/romcal.git
```

3. By default your cloned repo is referenced as `origin`. It corresponds to your forked romcal repository.
   Then it's recommended to add a reference to the original romcal repository. This will allow you to get the latest code change and update your forked repo from the original romcal repo.
   It's recommended to call this new reference: `upstream`. You can do it by the following command:

```bash
# Using SSH URL
git remote add upstream git@github.com:romcal/romcal.git

# Using HTTPS URL
git remote add upstream https://github.com/romcal/romcal.git
```

For a more complete guide, have a look to this [wiki page](https://github.com/romcal/romcal/wiki/Contributor%E2%80%99s-guide).
You will also find a lot of information on how to use `git` and GitHub over the internet.

## Install

When you have just cloned romcal, and every time you have fetched or rebased the latest code change, you have to install the romcal dependencies:

```
npm install
```

## Build

The romcal codebase is actually the same for backend and frontend usage.
But when romcal is built, two packages are generated in the `/dist` folder.
To make it work on the frontend side, the frontend library is wrapped and built thanks to `webpack`.

Build the project each time you are getting fresh code or updating the codebase:

```bash
npm run build
```

## Run

Instead of building every time the codebase to test or debug your code, you might be interested to run directly the TypeScript codebase and test it in the Node.js ecosystem.

```javascript
// local-test-file.ts in the root directory of romcal
import Romcal from './src';

(async () => {
  const dates = await Romcal.calendarFor({
    country: 'france',
    year: 2020,
    locale: 'fr',
  });

  console.log(dates);
})();
```

You can call your `local-test-file.ts` directly from the bash (e.g. in the romcal directory):

```bash
node -r ts-node/register -r tsconfig-paths/register ./sample-test-file.ts
```

Note: all file names starting with `local-` are not included in the romcal codebase.

## Test

romcal code is unit tested using the [jest](https://jestjs.io/) framework.

:heavy_check_mark: [GitHub Actions](https://github.com/romcal/romcal/actions) automates test runs to ensure that romcal's functionality is working as expected.

[`package.json`](../package.json) exposes test scripts:

- For running all test suites in a single run:

```bash
npm test
```

- When computed data has changed due to a codebase update, data snapshot tests will fail. To update the snapshots, run:

```bash
npm run test:snapshot:update
```

- For running all test suites and then watch the source directory for changes:

```bash
npm run test:watch
```

- For testing a single file during development,

```bash
npm run test -t ./src/utils/object/object.test.ts
```

_pass the `-t` flag and the path of the file_

## Coverage Reporting

A coverage report is generated for every core branch build and published to [gh-pages]().

## Committing Changes

### Message Format

When you are ready to commit your changes, your commit message should follow the conventional commit format

General format/terminology:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

In the following list, you can find what scopes can be used for each allowed type.

- `ci`:
  - scopes: No scope allowed
  - use: Updates to automation or the release process
- `build`:
  - scopes: No scope allowed
  - use: updates to build scripts
- `docs`:
  - scopes: No Scope allowed
  - use: documentation changes, updates, or additions
- `feat`:
  - scopes:
    - Any of the calendar IDs (`general` or `europe`, or `slovakia`, etc.)
    - Any of the locale IDs (`en`, `fr`, `es`, etc.)
    - `l10n` for changes to localization, either multiple locales or not specific to one
    - `calendar` for changes to calendars, either multiple or not specific to one
  - use: new features
- `enh`:
  - scopes: see `feat`
  - use: enhancements to existing features
- `fix`:
  - scopes: see `feat`
  - use: bug fixes
- `refactor`:
  - scopes: see `feat`
  - use: refactoring code, maintaining the same behaviors
- `perf`:
  - scopes: see `feat`
  - use: performance improvements, but not changing behavior
- `test`:
  - scopes: see `feat`
  - use: adding or updating tests
- `style`:
  - scopes: see for `feat`
  - use: formatting, missing semicolons, etc.; no code change

### Automatic Linting

(of staged files)

Files you stage & commit are automatically linted, and fixes are applied to your commit.

If it fails linting, your commit will fail.

### Dependency Deduping

Dependency deduping will be performed automatically, but you are responsible for committing it at your convenience.
Dedupe checking is performed in GitHub Actions, and if it fails, the build will fail.
