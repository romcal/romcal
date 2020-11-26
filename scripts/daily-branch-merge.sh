#!/bin/bash

TRAVIS_BRANCH=$1
echo "TRAVIS_BRANCH IS ${TRAVIS_BRANCH}"

containsElement () {
    local e match="$1"
    shift
    for e; do [[ "$e" == "$match" ]] && return 0; done
    return 1
}

hasOneMergeConflictMarkerSet () {
    local fileName="$1"
    local mergeConflictMarkers="$(git diff --check ${fileName})"
    local tokens=($(echo $mergeConflictMarkers | tr "\n" "\n"))
    local numberOfMatches=$(echo "${tokens[@]}" | tr " " "\n" | grep -c "${fileName}:")
    if [ $numberOfMatches -eq 3 ]; then
        return 0
    fi
    return 1
}

hasTwoVersionKeys () {
    local fileName="$1"
    # Get the content between the merge conflict markers
    local conflict=$(sed -n -e '/^<<<<<<< HEAD$/,/^>>>>>>> dev$/ { /^<<<<<<< HEAD$/d; /^>>>>>>> dev$/d; p; }' "${fileName}")
    # Get the number of versions in the string (it should be 2)
    local numberOfVersions=$(echo "$conflict" | tr " " "\n" | grep -c "version")
    # Return 0 if there are 2 version keys in the conflict marker
    if [ $numberOfVersions -eq 2 ]; then
        return 0
    fi
    return 1
}

# Try to determine if only package and package-lock is in conflict
# Then determine if only the version fields are in conflict
# If the above are true, it is safe to discard changes from these 2 files and proceed with the merge
isSafeToMergeDespiteConflicts () {
    FILES_WITH_MERGE_CONFLICTS="$(git diff --name-only --diff-filter=U)"
    FILE_TOKENS=($(echo $FILES_WITH_MERGE_CONFLICTS | tr "\n" "\n"))
    FILE_TOKENS_LENGTH=${#FILE_TOKENS[@]}
    if [ $FILE_TOKENS_LENGTH -eq 2 ]; then
        containsElement "package.json" "${FILE_TOKENS[@]}"
        HAS_PACKAGE_JSON=$(echo $?)
        containsElement "package-lock.json" "${FILE_TOKENS[@]}"
        HAS_PACKAGE_LOCK_JSON=$(echo $?)
        if [ "$HAS_PACKAGE_JSON" -eq 0 ] && [ "$HAS_PACKAGE_LOCK_JSON" -eq 0 ]; then
            # Ensure that there is only 1 set of merge conflict markers in package.json and package-lock.json
            if [[ $(hasOneMergeConflictMarkerSet "${FILE_TOKENS[0]}") -eq 0 ]] && [[ $(hasOneMergeConflictMarkerSet "${FILE_TOKENS[1]}") -eq 0 ]]; then
                if [[ $(hasTwoVersionKeys "${FILE_TOKENS[0]}") -eq 0 ]] && [[ $(hasTwoVersionKeys "${FILE_TOKENS[1]}") -eq 0 ]]; then
                    echo "Only versions are in conflict:- most likely due to auto semver increments on different branches... proceed with merge"
                    return 0
                else
                    echo "Could not ensure that only the versions are in conflict... abort auto merge"
                fi
            else
                echo "More than 1 set of merge conflict markers in package.json or package-lock.json... abort auto merge"
            fi
        else
            echo "Files in conflict are other than package.json and package-lock.json... abort auto merge"
        fi
    else
        echo "More than 2 files have merge conflicts... abort auto merge"
    fi
    return 1
}

# If on master, checkout the dev branch and update
if [ "$TRAVIS_BRANCH" == 'master' ]; then

    echo "Switching to the dev branch"
    git checkout -qf dev

    echo "Merging the master branch to dev"
    git merge master

    CONFLICTS=$(git ls-files -u | wc -l)
    if [ "$CONFLICTS" -gt 0 ] ; then
        # Check if conflicts are safe to auto merge
        if isSafeToMergeDespiteConflicts; then
            echo "Resolving merge conflicts with versions by retaining versions in current branch"
            git checkout --ours package.json
            git checkout --ours package-lock.json
            git commit -am 'docs: [ci skip] merge latest code from master to dev'
            git push origin dev
        else
            echo "Detected merge conflicts that cannot be automatically resolved... aborting auto merge"
            git merge --abort
        fi
    else
        echo "Pushing latest from master to dev"
        git push origin dev
    fi

    echo "Returning to the master branch"
    git checkout -qf master

else
    echo "Skipped automatic branch merging because not on master branch"
fi
