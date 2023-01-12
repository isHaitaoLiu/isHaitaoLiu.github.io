import{_ as i,p as l,q as t,a1 as e}from"./framework-96b046e1.js";const g={},o=e("<ol><li><p>commit</p><ul><li>撤回 <ul><li>git reset --soft HEAD^ (仅撤回提交，代码保留)</li><li>git reset --soft HEAD^ 与 git reset --mixed HEAD^ 是一样的，mixed的意思是不删除工作空间改动代码</li><li>相关参数： <ol><li>--soft 不删除用户空间代码，撤销commit，不撤销git add .</li><li>--mixed 不删除用户空间代码，撤销commit，撤销git add .</li><li>--hard 删除用户空间代码，撤销commit，撤销git add .</li><li>HEAD^ 意思是上一个版本，也可以写成HEAD~1</li></ol></li><li>连续撤销n次 git reset --soft HEAD～n</li></ul></li><li>修改 <ul><li>git commit --amend (仅修改上次提交的注释)</li></ul></li></ul></li><li><p>branch</p><ul><li>查看 <ul><li>git branch -r （查看远程分支）</li><li>git branch -a (查看所有分支)</li></ul></li></ul></li><li><p>fetch</p><ul><li>git fetch origin &lt;远程分支名&gt; （获取远程分支的更新） <ul><li>再使用 git merge origin FETCH_HEAD 可以与当前分支代码进行合并 （其中FETCH_HEAD： 是一个版本链接，记录在本地的一个文件中，指向着目前已经从远程仓库取下来的分支的末端版本）</li><li>上述的git merge origin FETCH_HEAD 也可使用 git merge origin/&lt;远程分支名&gt; 进行替换， 也可以合并分支</li></ul></li><li>git fetch （获取所有远程分支最新数据）</li><li>git fetch origin &lt;远程分支名&gt;:&lt;本地分支名&gt; （新建一个本地分支并将远程分支数据更新到本地分支）</li></ul></li><li><p>checkout</p><ul><li>新建 <ul><li>git checkout -b &lt;本地分支名&gt; origin/&lt;远程分支名&gt; 远程新建分支，推送到本地</li><li>git checkout -b &lt;本地分支名&gt; (新建分支) + git push origin &lt;远程分支名&gt;:&lt;本地分支名&gt; 本地新建分支，推送到远程</li></ul></li></ul></li></ol>",1),c=[o];function r(u,n){return l(),t("div",null,c)}const s=i(g,[["render",r],["__file","Git.html.vue"]]);export{s as default};