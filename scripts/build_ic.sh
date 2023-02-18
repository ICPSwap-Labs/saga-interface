# !/bin/bash
version=$1

./scripts/env.sh "ic"

rm -rf build

yarn build

if [ $version ];then
  zip -r app_$version.zip ./build
else
  zip -r app.zip ./build
fi
