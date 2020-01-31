#!/bin/bash

TRAVIS_BRANCH=$1
TRAVIS_EVENT_TYPE=$2
GH_USER=$3
GH_TOKEN=$4
GH_EMAIL=$5

# Bump version only if TRAVIS_EVENT_TYPE is push
if [ "$TRAVIS_EVENT_TYPE" = 'push' ]
then

    echo "TRAVIS_BRANCH IS ${TRAVIS_BRANCH}"

    PACKAGE_NAME="$(node -pe "require('./package.json')['name']")"
    echo "PACKAGE_NAME is ${PACKAGE_NAME}"

    CURRENT_VERSION="$(npm view ${PACKAGE_NAME}@latest version)"
    echo "CURRENT_VERSION is $CURRENT_VERSION"

    # If not on master branch ...
    if [ "$TRAVIS_BRANCH" != 'master' ]; then

        # ... obtain and tokenize the latest version according to tag
        if [ "$TRAVIS_BRANCH" = 'test' ]; then
            LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@beta version)"
        elif [ "$TRAVIS_BRANCH" = 'dev' ]; then
            LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@alpha version)"
        else
            LATEST_TAG_VERSION="$(npm view ${PACKAGE_NAME}@canary version)"
        fi
        
        echo "LATEST_TAG_VERSION is $LATEST_TAG_VERSION"

        tokens=($(echo $LATEST_TAG_VERSION | tr "-" "\n"))
        SEMVER=${tokens[0]};
        PREID=${tokens[1]};

        # If tag version is higher than the 'latest' version in npm
        # then it means that no new version has been published to master yet and
        # we shuld continue incrementing the preid based on the tag version
        COMPARISON_RESULT="$(./scripts/semver.sh $SEMVER $CURRENT_VERSION)"
        if [ "$COMPARISON_RESULT" = 1 ]; then
            echo "USING LATEST TAG VERSION BECAUSE IT IS HIGHER THAN THE CURRENT_VERSION";
            CURRENT_VERSION=$LATEST_TAG_VERSION
            echo "CURRENT_VERSION will now be ${CURRENT_VERSION}";
        fi
    fi

    # Bump version accordingly
    if [ "$TRAVIS_BRANCH" = 'master' ]; then
        NEW_VERSION="$(./node_modules/.bin/semver -i patch ${CURRENT_VERSION} )"
    elif [ "$TRAVIS_BRANCH" = 'test' ]; then
        NEW_VERSION="$(./node_modules/.bin/semver -i prerelease --preid beta $CURRENT_VERSION)"
    elif [ "$TRAVIS_BRANCH" = 'dev' ]; then
        NEW_VERSION="$(./node_modules/.bin/semver -i prerelease --preid alpha $CURRENT_VERSION )"
    else
        NEW_VERSION="$(./node_modules/.bin/semver -i prerelease --preid canary $CURRENT_VERSION )"
    fi

    echo "NEW_VERSION is ${NEW_VERSION}"
    npm version "${NEW_VERSION}" -m "[skip travis-ci] Release version %s"

    # Configure origin with personal access token
    git remote rm origin
    git remote add origin https://${GH_USER}:${GH_TOKEN}@github.com/romcal/${PACKAGE_NAME}.git > /dev/null 2>&1

    # Setup the user
    git config --global user.email "${GH_EMAIL}"
    git config --global user.name "${GH_USER}"

    git push origin --set-upstream origin "${TRAVIS_BRANCH}"

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
fi