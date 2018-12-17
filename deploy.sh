#!/bin/bash
git branch -D gh-pages
git checkout -b gh-pages
npm i
npm run build 
prog=$(basename “$0”)
for file in $(ls -a);do 
	if [ "${file}" != "build" -a "${file}" != "." -a "${file}" != ".." -a "${file}" != ".git"  -a “{file}” != “${prog}” ]; then
		rm -rf ${file}; 
		echo “File $file deleted.”
	fi;
done;
git config --global user.name "kishore-devaraj"
git config --global user.email "kishoregrylls@gmail.com"
git add -A
git commit -m “Adding build one”
git remote add origin https://github.com/Tw-Bootcamp-Avengers/cricket-scorer-app
git push origin gh-pages
