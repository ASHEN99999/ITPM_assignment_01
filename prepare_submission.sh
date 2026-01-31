#!/bin/bash

REG_NO="IT22267818"
SUBMISSION_DIR="${REG_NO}"

# Clean up previous runs
rm -rf "$SUBMISSION_DIR"
rm -f "${REG_NO}.zip"

# Create directory
mkdir -p "$SUBMISSION_DIR"

# 1. Excel File
cp "${REG_NO}_TestCases.xlsx" "$SUBMISSION_DIR/"

# 2. Repo Link
cp github_repo_link.txt "$SUBMISSION_DIR/${REG_NO}_RepoLink.txt"

# 3. Project Files (Copying to a subfolder to keep it clean)
PROJECT_DIR="$SUBMISSION_DIR/${REG_NO}_PlaywrightProject"
mkdir -p "$PROJECT_DIR"

# Copy essential files
cp package.json "$PROJECT_DIR/"
cp tsconfig.json "$PROJECT_DIR/"
cp README.md "$PROJECT_DIR/"
# Copy directories
cp -r tests "$PROJECT_DIR/"
cp -r scripts "$PROJECT_DIR/"
# Copy existing Excel template (needed context? maybe not required for submission but accurate to include source)
cp "Assignment I - IT22267818 New(1).xlsx" "$PROJECT_DIR/"

# Create Zip
zip -r "${REG_NO}.zip" "$SUBMISSION_DIR"

echo "Submission created: ${REG_NO}.zip"
