#!/bin/bash

TRAVIS_BRANCH=$1
echo "TRAVIS_BRANCH IS ${TRAVIS_BRANCH}"

PACKAGE_NAME="$(node -pe "require('./package.json')['name']")"
echo "PACKAGE_NAME is ${PACKAGE_NAME}"

CURRENT_VERSION="$(npm view ${PACKAGE_NAME}@latest version)"
echo "CURRENT_VERSION is $CURRENT_VERSION"

if [ "$TRAVIS_BRANCH" = 'master' ]; then
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@latest version)"
    elif [ "$TRAVIS_BRANCH" = 'test' ]; then
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@beta version)"
    elif [ "$TRAVIS_BRANCH" = 'dev' ]; then
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@alpha version)"
else
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@canary version)"
fi

echo "LATEST_TAG_VERSION is $LATEST_TAG_VERSION"

# Deprecate older versions accordingly
if [ "$TRAVIS_BRANCH" = 'master' ]; then
    elif [ "$TRAVIS_BRANCH" = 'test' ]; then
    elif [ "$TRAVIS_BRANCH" = 'dev' ]; then
else
fi


# Publish npm module
if [ "$TRAVIS_BRANCH" = 'master' ]; then
    npm publish --tag latest --access public
    elif [ "$TRAVIS_BRANCH" = 'test' ]; then
    npm publish --tag beta --access public
    elif [ "$TRAVIS_BRANCH" = 'dev' ]; then
    npm publish --tag alpha --access public
else
    npm publish --tag canary --access public
fi