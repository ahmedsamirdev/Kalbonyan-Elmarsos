### Learning objectives:

- Explain how to initialize a repository and commit changes to it.
- Describe best practices for making commits in Git.
- Differentiate between the three trees in the Git architecture.
- Assess the effect of making changes to documents in a repository.
- Analyze the Git repository’s index of changes.
- Analyze Git features for ignoring files and directories.

------

### Course Notes..

</br>

**Git** is software that keeps track of changes that your make to files and directories.

**HEAD** pointer is top or last commit or in branch in repository.

`git init` to create git repository.

`git log` to see what's in HEAD after commit.

<p align="center">
 <img  src="https://i.ibb.co/j6nWWJg/git.png" width="500">
</p>

</br>


`git status` to check if there changes in files in working directory which not in staging yet.

`git add .` to add all files in the directory to staging.

`git add <FILE_NAME>` to add file to staging.

`git commit -a <FILE_NAME>` to add file to repo directly.

`git commit -am "WRITE_YOUR_MESSAGE"` to add file to repo directly.

`git commit --all` to add all files to repo directly.

`git show <WRITE_SHA_COMMIT>` to view earlier commit.

`git mv <FILE_NAME>` to rename file (in same path) or move file to another directory.

`git rm <FILE_NAME>` to delete file from working ready to commit and delete from git repo.

`git diff` to check changes in files as compare working and staging changes.

`git diff --staged` to check changes in files as compare staging and repository changes.

`git diff --color-words` show only the words that changed.

`git diff <WRITE_SHA_COMMIT>..<WRITE_SHA_COMMIT>` to compare commits.

`git checkout -- <FILE_NAME>`to undo changes in working directory from your repository (within same branch).

`git reset HEAD <FILE_NAME>` undo files changes after adding to staging tree.

`git checkout -- ` to undo changes in all files in working directory from your repository (within same branch).

`git commit --amend -m "WRITE_YOUR_MESSAGE"` to edit recent commit with new changes.

`git revert <WRITE_SHA_COMMIT>` to revert a commit (undo changes).

`git clean -f` to remove untracked files with `-f` to force removing (use `-n` to see untracked files first).

`.gitignore`this file contains files or folders name to prevent git from tracking them.

By default git ignores directories with no files, we use empty file named `.gitkeep` inside the directory to force to commits it although its empty.

---

**Course Link:** [Git Essential Training: The Basics](https://www.linkedin.com/learning/git-essential-training-the-basics/use-git-version-control-software-to-manage-project-code)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://i.ibb.co/W55CDnr/Git-Essential-Training-The-Basics.jpg" width="700">
</p>

