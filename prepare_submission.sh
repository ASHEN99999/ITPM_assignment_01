#!/bin/bash

REG_NO="IT22267818"
SUBMISSION_DIR="${REG_NO}"

# Clean up previous runs
rm -rf "$SUBMISSION_DIR"
rm -f "${REG_NO}.zip"

# Create directory
mkdir -p "$SUBMISSION_DIR"

# Copy Excel Report
cp "${REG_NO}_TestCases.xlsx" "$SUBMISSION_DIR/"

# Copy Repo Link
cp github_repo_link.txt "$SUBMISSION_DIR/${REG_NO}_RepoLink.txt"

# Copy Project Files directly (no nested folder)
cp package.json "$SUBMISSION_DIR/"
cp tsconfig.json "$SUBMISSION_DIR/"
cp README.md "$SUBMISSION_DIR/"
cp -r tests "$SUBMISSION_DIR/"
cp -r scripts "$SUBMISSION_DIR/"
cp "Assignment I - IT22267818_TEST_CASE.xlsx" "$SUBMISSION_DIR/"

# Create Zip
zip -r "${REG_NO}.zip" "$SUBMISSION_DIR"

echo "Submission created: ${REG_NO}.zip"
