DEPLOY_INFO=`git log --pretty=format:'%h by %an on %aD' -n 1`
 
gulp build --type production
cd ../
git clone -b gh-pages --depth 1 git@github.com:hellyeah/react-hackmatch.git ./production
cd production
 
# Delete all files and copy fresh build to ensure deleted files don't linger
git rm -r *
cp -r ../react-hackmatch/dist/* ./
 
# Create commit and push to gh-pages
git add .
git config user.email "gailees@umich.edu"
git config user.name "hellyeah"
git commit -m "[DEPLOYMENT] $DEPLOY_INFO"
git push origin gh-pages