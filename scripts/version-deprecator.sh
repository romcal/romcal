#!/bin/bash

TRAVIS_BRANCH=$1
PACKAGE_NAME="$(node -pe "require('./package.json')['name']")"
CURRENT_VERSION="$(npm view ${PACKAGE_NAME}@latest version)"
echo "deprecating all version before $CURRENT_VERSION"
npm deprecate "${PACKAGE_NAME}@\"< ${CURRENT_VERSION}\"" "latest release is ${CURRENT_VERSION}"