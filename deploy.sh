#!/bin/bash
npm i
git branch -D gh-pages
git checkout -b gh-pages
npm run build 
prog=$(basename “$0”)
for file in $(ls -a);do 
	if [ "${file}" != "build" -a "${file}" != "." -a "${file}" != ".." -a "${file}" != ".git"  -a “{file}” != “${prog}” ];then
		rm -rf ${file}; 
		echo “File $file deleted.”
	fi;
done;
git commit -a -m “Adding build @$(date)”
