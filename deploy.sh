#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/nokauttorton/kkwedding.github.io master:gh-pages

cd -