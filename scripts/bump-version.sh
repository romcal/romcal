#!/bin/bash

TRAVIS_BRANCH=$1
echo "TRAVIS_BRANCH IS ${TRAVIS_BRANCH}"

PACKAGE_NAME="$(node -pe "require('./package.json')['name']")"
echo "PACKAGE_NAME is ${PACKAGE_NAME}"

# Flag to indicate if we are using a custom version
WILL_USE_CUSTOM_VERSION=false

# Get the last commit message
LAST_COMMIT_MESSAGE="$(git log --pretty='format:%Creset%s' --no-merges -1)"
# Check if the commit message has the unique identifer [USE_CUSTOM_SEMVER]
# If it does, then do not automatically increment builds in this script
# and simply use the semver version set in package.json
if [[ $LAST_COMMIT_MESSAGE == *"[USE_CUSTOM_SEMVER]"* ]]; then
    echo "Found [USE_CUSTOM_SEMVER] identifier in latest commit, will use version specified in package.json"
    NEW_VERSION="$(node -pe "require('./package.json')['version']")"
    WILL_USE_CUSTOM_VERSION=true
else
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

        # If the tag version is higher than the "latest" version in npm,
        # then no new stable version has been published from master yet
        # and we should continue incrementing the "preid" based on the tag version
        COMPARISON_RESULT="$(./scripts/semver.sh compare $SEMVER $CURRENT_VERSION)"
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
fi

echo "NEW_VERSION is ${NEW_VERSION}"

# Run auto changelog
npm run updateChangelog
git add CHANGELOG.md
git commit -m "docs: [ci skip] Update changelog"

if [ "$WILL_USE_CUSTOM_VERSION" = true ];then
    # Also allow same versions because the defaut behavior of npm-version
    # checks and throws and error if the version being supplied is the
    # same in package.json
    npm version "${NEW_VERSION}" --allow-same-version -m "chore: [ci skip] Release version %s"
else
    npm version "${NEW_VERSION}" -m "chore: [ci skip] Release version %s"
fi

git push origin "${TRAVIS_BRANCH}"

# Publish tags for dev, test and master branch releases only
if [[ "$TRAVIS_BRANCH" == 'master' || "$TRAVIS_BRANCH" == 'test' || "$TRAVIS_BRANCH" == 'dev' ]]; then
    git push origin --tags
else
    echo "Will not create new tags for feature branch builds"
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
