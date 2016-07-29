#!/bin/bash
npm run build

git checkout gh-pages

rm -rf /tmp/deploy
mkdir /tmp/deploy
mv build /tmp/deploy/build
mv node_modules /tmp/deploy/node_modules
rm -rf *.*

mv /tmp/deploy/build/*.* .
git add .
git commit -a -m "deployment"
git push origin gh-pages

rm -rf *.*
mv /tmp/deploy/node_modules .
rm -rf /tmp/deploy
git checkout master
git pull