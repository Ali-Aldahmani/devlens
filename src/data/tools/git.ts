export const git = {
  name: "Git",
  import: "/* Git Command */",
  insertTarget: "terminal" as const,
  categories: [
    {
      title: "SETUP",
      items: [
        { snippet: "git config --global user.name “[firstname lastname]”", desc: "set a name that is identifiable for credit when review version history" },
        { snippet: "git config --global user.email “[valid-email]”", desc: "set an email address that will be associated with each history marker" },
        { snippet: "git config --global color.ui auto", desc: "set automatic command line coloring for Git for easy reviewing" },
      ],
    },
    {
      title: "SETUP & INIT",
      items: [
        { snippet: "git init", desc: "initialize an existing directory as a Git repository" },
        { snippet: "git clone [url]", desc: "retrieve an entire repository from a hosted location via URL" },
      ],
    },
    {
      title: "STAGE & SNAPSHOT",
      items: [
        { snippet: "git status", desc: "show modified files in working directory, staged for your next commit" },
        { snippet: "git add [file]", desc: "add a file as it looks now to your next commit (stage)" },
        { snippet: "git reset [file]", desc: "unstage a file while retaining the changes in working directory" },
        { snippet: "git diff", desc: "diff of what is changed but not staged" },
        { snippet: "git diff --staged", desc: "diff of what is staged but not yet committed" },
        { snippet: "git commit -m “[descriptive message]”", desc: "commit your staged content as a new commit snapshot" },
      ],
    },
    {
      title: "BRANCH & MERGE",
      items: [
        { snippet: "git branch", desc: "list your branches. a * will appear next to the currently active branch" },
        { snippet: "git branch [branch-name]", desc: "create a new branch at the current commit" },
        { snippet: "git checkout", desc: "switch to another branch and check it out into your working directory" },
        { snippet: "git merge [branch]", desc: "merge the specified branch’s history into the current one" },
        { snippet: "git log", desc: "show all commits in the current branch’s history" },
      ],
    },
    {
      title: "SHARE & UPDATE",
      items: [
        { snippet: "git remote add [alias] [url]", desc: "add a git URL as an alias" },
        { snippet: "git fetch [alias]", desc: "fetch down all the branches from that Git remote" },
        { snippet: "git merge [alias]/[branch]", desc: "merge a remote branch into your current branch to bring it up to date" },
        { snippet: "git push [alias] [branch]", desc: "Transmit local branch commits to the remote repository branch" },
        { snippet: "git pull", desc: "fetch and merge any commits from the tracking remote branch" },
      ],
    },
    {
      title: "INSPECT & COMPARE",
      items: [
        { snippet: "git log", desc: "show the commit history for the currently active branch" },
        { snippet: "git log branchB..branchA", desc: "show the commits on branchA that are not on branchB" },
        { snippet: "git log --follow [file]", desc: "show the commits that changed file, even across renames" },
        { snippet: "git diff branchB...branchA", desc: "show the diff of what is in branchA that is not in branchB" },
        { snippet: "git show [SHA]", desc: "show any object in Git in human-readable format" },
      ],
    },
    {
      title: "TRACKING PATH CHANGES",
      items: [
        { snippet: "git rm [file]", desc: "delete the file from project and stage the removal for commit" },
        { snippet: "git mv [existing-path] [new-path]", desc: "change an existing file path and stage the move" },
        { snippet: "git log --stat -M", desc: "show all commit logs with indication of any paths that moved" },
      ],
    },
    {
      title: "REWRITE HISTORY",
      items: [
        { snippet: "git rebase [branch]", desc: "apply any commits of current branch ahead of specified one" },
        { snippet: "git reset --hard [commit]", desc: "clear staging area, rewrite working tree from specified commit" },
      ],
    },
    {
      title: "TEMPORARY COMMITS",
      items: [
        { snippet: "git stash", desc: "Save modified and staged changes" },
        { snippet: "git stash list", desc: "list stack-order of stashed file changes" },
        { snippet: "git stash pop", desc: "write working from top of stash stack" },
        { snippet: "git stash drop", desc: "discard the changes from top of stash stack" },
      ],
    },
  ],
};