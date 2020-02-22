#!/bin/bash

TRAVIS_BRANCH=$1
echo "TRAVIS_BRANCH IS ${TRAVIS_BRANCH}"

# Create the docs folder with generated API docs
npm run typedoc

git subtree push --prefix docs origin gh-pages

