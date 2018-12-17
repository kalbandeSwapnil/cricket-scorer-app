#!/bin/bash
git branch -D gh-pages
git checkout -b gh-pages
npm i
npm run build 
npm run deploy
