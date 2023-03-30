        Terms
directory - folder
terminal  or command line -interface for text command 
cli -command line interface  
cd  - change directory 
repository - directory  or folder place where project is hold 
github - website where your repository is hold 

        Commands 


git --version

git clone git@github.com:git@github.com:nedyalko94/WebDevMay.git 
        clone "download repository from github"
git pull
        download change from github/repository
cd folder     
        change directory/going to directory folder
        cd ../
        going back  / leaving folder

ls -la

            list all even hide file

git status

git add .
             for adding -track all file 
git add test.md
                     add spec file

git commit -m "you have to have message" -m "some description"

git commit -am " short version for add and commit at a same time "

git push origin master
            origin is  option for location of original place of repository  (master stand for witch branch)

git init    
        add new folder or new file to git
git remote add origin git@github.com:nedyalko94/WebDevMay.git 
        have to be follow with ssh link 
        adding origin so we can push 
git remote -v 
        for check if we have add origin 
git push -u origin main
        u is for set default 

git branch
        check on witch branch are you 
git checkout -b test
        creation of branch test 

git checkout test
        this is for switching tp "test" branch
git checkout main
        this is switching to main branch
git diff                                test for conflict
        we can see the diff between 2 branches

        
git reset 
                for undoing add
git reset HEAD~1
                for undoing already commit file
git log
        for checking log of commit 
git reset b50565b41c65a68cff3798c9b35fa594fb633d69
        you can reset/un stage  to exact commit with using hashes from the log
        but that don't change the text in the file only in Git
git reset --hard b50565b41c65a68cff3798c9b35fa594fb633d69
        reset and delete from text editor
        git push --set-upstream origin test branch
		this is for new branch that have not been in git
git push -u origin test branch
		same but short version 
ssh-keygen -t ed25519 -C "your_email@example.com"
