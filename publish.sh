cd .publish
rm -rf javascript-course
git clone git@github.com:e-xtrategy/javascript-course.git
cd javascript-course
git checkout --orphan gh-pages
git add .
git commit -a -m "publishing"
git push origin gh-pages --force
