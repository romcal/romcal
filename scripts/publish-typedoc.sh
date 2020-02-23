#!/bin/bash

TRAVIS_BRANCH=$1
echo "TRAVIS_BRANCH IS ${TRAVIS_BRANCH}"

if [ "$TRAVIS_BRANCH" != 'master' ]; then
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@latest version)"
elif [ "$TRAVIS_BRANCH" = 'test' ]; then
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@beta version)"
elif [ "$TRAVIS_BRANCH" = 'dev' ]; then
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@alpha version)"
else
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@canary version)"
fi

# Create the docs folder with generated API docs
npm run typedoc

# gh-pages
git add docs && git commit -am "[skip travis-ci] Publish latest typedoc for ${LATEST_TAG_VERSION}"
git subtree push --prefix docs origin gh-pages
