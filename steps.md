wow~!

I have got a new skill~ ,create a new empty branch.

Steps are as follows:

Step 1:

Create and switch a new branch.

```
git branch <new_branch>
git checkout <new_branch>
git rm --cached -r . 
git clean -f -d
```

Step 2:

Create an empty commit.

```
git commit --allow-empty -m "[empty] initial commit"
```

Step 3:

Push the new branch.

```
git push origin <new_branch>
```

