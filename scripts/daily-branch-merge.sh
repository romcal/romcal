#!/bin/bash

TRAVIS_BRANCH=$1
echo "TRAVIS_BRANCH IS ${TRAVIS_BRANCH}"

# If on master, checkout the dev branch and update
if [ "$TRAVIS_BRANCH" != 'master' ]; then
    
    echo "Switching to the dev branch"
    git checkout -qf dev
    
    echo "Merging the master branch to dev"
    git merge master
    
    CONFLICTS=$(git ls-files -u | wc -l)
    if [ "$CONFLICTS" -gt 0 ] ; then
        echo "There is a merge conflict. Aborting"
        git merge --abort
    else
        echo "Pushing latest from master to dev"
        git push origin test
    fi
    
    echo "Returning to the master branch"
    git checkout -qf master
    
else
    echo "Skipped automatic branch merging because not on master branch"
fi
