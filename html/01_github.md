# Using Github

## Github

### What is Github?
_Github_ is different from something called _Git_.

Git is a version control system that many programmers use to tracks changes in their code (or any other kinds of files). Git uses [git commands](http://rogerdudler.github.io/git-guide/) using a terminal to track and update the changes we make to code (or other files).

Github is a place where we can share, collaborate on, and view the files that we are updating and tracking. [YouTube: What is GitHub?](https://www.youtube.com/watch?v=w3jLJU7DT5E)

Some basic Git/Github vocabulary that you might hear in the wild includes: clone a repo, commit changes, push/pull commits, make a branch, checkout a branch, merge changes,...

## Creating a live web portfolio
_The following is modified from [github.com/susanev/uw-hcde-creative-computing](https://github.com/susanev/uw-hcde-creative-computing/blob/master/lessons/week1/portfolio.md)_

We are going to use [Github](https://github.com/), without the terminal (which is uncommon), to upload web files so that they can be shared with and viewed by others on the web.

### Part 1: Create your portfolio repository
1. Login to [Github](https://github.com/)
1. Click the `+` in the upper-right corner and choose _New repository_
1. Fill in a repository name (e.g., cse-startup, cse-da-summer-2017, etc)
1. Check _Initialize this repository with a README_
1. Click _Create repository_

### Part 2: Update your default branch
1. Click _Branch: master_ on the left-side, type _gh-pages_ intro the text box, and press enter
1. Click _Settings_, Click _Branches_, in the _Default branch_ drop-down select _gh-pages_
1. Click _Update_, and then click _I understand, update the default branch._
1. Click _Code_
1. Click _2 branches_
1. Click the trash-can icon, deleting the master branch

### Part 3: Uploading your p5.js work
1. Click _Code_
1. Click _Upload Files_
1. Using your computer's file explorer, navigate to your **Creature 2.0** files on your computer.
1. Drag the entire folder (which contains `index.html` and `sketch.js` at a minimum) into Github's drag and drop interface box
1. Write a short commit message to describe what you did (e.g. "Uploads my p5.js creature")
1. Click _Commit Changes_

### Part 4: Viewing your work
1. Navigate to https://username.github.io/repositoryname/yourcreaturefolder/ where you replace _username_ with your github username, replace _repsoitoryname_ with your repository name, and replace _yourcreaturefolder_ with the name of your creature folder. So mine is: http://sudocrystal.github.io/startup-test/creature_ex/
1. Congratulate yourself! **This website is live and you can share the link with others!**
1. Add a description to the repo with a link to the base part of this URL (everything except the creature folder) - we will use this later.

### Part 5:
1. Repeat _Part 4_ to add your cookie game to github
1. Repeat _Part 4_ to add your pong game to github

### Part 6: Creating an index page
It's kind of a pain to have to remember the folder name for each folder, so let's create a landing page with links to those pages.

1. Click _README.md_
1. Click the trash-can icon
1. Add a commit message describing what you are doing (e.g. "Removes README")
1. Click _Create new file_
1. Name the file `index.html`
1. In the body of file, put `Check out some of my p5.js projects: <a href="yourcreaturefolder/">My Creature</a>`, where _yourcreaturefolder_ is the name of your creature folder.
1. Add a commit message describing what you are doing (e.g. "Adds index.html with a link")
1. Click _Commit new file_ at the bottom of the page
1. Navigate to https://username.github.io/repositoryname/ where you should now see the non-compliant HTML that you just wrote (we'll fix that soon!)
1. Adds links to all your p5.js work
