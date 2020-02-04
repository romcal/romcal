#!/bin/bash

TRAVIS_BRANCH=$1
echo "TRAVIS_BRANCH IS ${TRAVIS_BRANCH}"

PACKAGE_NAME="$(node -pe "require('./package.json')['name']")"
echo "PACKAGE_NAME is ${PACKAGE_NAME}"

CURRENT_VERSION="$(npm view ${PACKAGE_NAME}@latest version)"
echo "CURRENT_VERSION is $CURRENT_VERSION"

# ... obtain and tokenize the latest version according to tag
if [ "$TRAVIS_BRANCH" = 'test' ]; then
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@beta version)"
elif [ "$TRAVIS_BRANCH" = 'dev' ]; then
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@alpha version)"
else
    LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@canary version)"
fi

echo "LATEST_TAG_VERSION is $LATEST_TAG_VERSION"

npm deprecate "${PACKAGE_NAME}@\"< ${LATEST_TAG_VERSION}\"" "latest release is ${LATEST_TAG_VERSION}"