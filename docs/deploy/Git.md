1. commit
    - 撤回
        - git reset --soft HEAD^  (仅撤回提交，代码保留)
        - git reset --soft HEAD^ 与 git reset --mixed HEAD^ 是一样的，mixed的意思是不删除工作空间改动代码
        - 相关参数：
            1. --soft 不删除用户空间代码，撤销commit，不撤销git add .
            2. --mixed 不删除用户空间代码，撤销commit，撤销git add .
            3. --hard 删除用户空间代码，撤销commit，撤销git add . 
            4. HEAD^  意思是上一个版本，也可以写成HEAD~1
        - 连续撤销n次 git reset --soft HEAD～n
    - 修改
        - git commit --amend  (仅修改上次提交的注释)
2. branch
    - 查看
        - git branch -r   （查看远程分支）
        - git branch -a    (查看所有分支)

3. fetch
    - git fetch origin <远程分支名>   （获取远程分支的更新）  
        - 再使用 git merge origin FETCH_HEAD 可以与当前分支代码进行合并 （其中FETCH_HEAD： 是一个版本链接，记录在本地的一个文件中，指向着目前已经从远程仓库取下来的分支的末端版本）
        - 上述的git merge origin FETCH_HEAD 也可使用 git merge origin/<远程分支名> 进行替换， 也可以合并分支
    - git fetch （获取所有远程分支最新数据）
    - git fetch origin <远程分支名>:<本地分支名>  （新建一个本地分支并将远程分支数据更新到本地分支）
4. checkout
    - 新建
        - git checkout -b <本地分支名> origin/<远程分支名>   远程新建分支，推送到本地
        - git checkout -b <本地分支名> (新建分支) + git push origin <远程分支名>:<本地分支名>    本地新建分支，推送到远程