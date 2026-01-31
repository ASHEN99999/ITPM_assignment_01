# How to Upload This Project to GitHub

Follow these steps to upload your automation project to a GitHub repository.

## Prerequisites
- A GitHub account.
- Git installed on your computer.

## Step 1: Create a .gitignore File (Already Created)
I have already created a `.gitignore` file for you to ensure unnecessary files (like `node_modules` and the `zip` file) are not uploaded.

## Step 2: Create a New Repository on GitHub
1.  Log in to [GitHub](https://github.com/).
2.  Click the **+** icon in the top-right corner and select **New repository**.
3.  **Repository name**: Enter a name (e.g., `itpm-assignment1-automation`).
4.  **Public/Private**: Select **Public** (as per assignment requirement).
5.  Do **NOT** check "Initialize this repository with a README" (since you already have one).
6.  Click **Create repository**.
7.  Copy the HTTPS URL provided (e.g., `https://github.com/your-username/itpm-assignment1-automation.git`).

## Step 3: Initialize Git Locally
Open your terminal in the project folder (`/home/ashen/Documents/private/itpm-assignment1`) and run:

```bash
git init
```

## Step 4: Stage and Commit Files
Add all files to the staging area and commit them:

```bash
git add .
git commit -m "Initial commit for ITPM Assignment 1"
```

## Step 5: Connect to GitHub
Link your local repository to the GitHub repository you created (replace the URL with yours):

```bash
git branch -M main
git remote add origin https://github.com/your-username/itpm-assignment1-automation.git
```

## Step 6: Push to GitHub
Upload your code:

```bash
git push -u origin main
```

## Step 7: Get the Link
1.  Refresh your GitHub repository page.
2.  Copy the browser URL.
3.  Paste this URL into the `github_repo_link.txt` file in your project folder.
4.  Re-run the packaging script if you need to update the zip file with the correct link:
    ```bash
    ./prepare_submission.sh
    ```
