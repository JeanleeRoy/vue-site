#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# Add 404.html
cp index.html 404.html

# Set git

git init
git add -A
git commit -m 'Deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/JeanleeRoy/vue-site.git master:gh-pages

cd -