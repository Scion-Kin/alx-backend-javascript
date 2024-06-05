#!/usr/bin/bash

for i in {1..5}
do

    cp -r task_0/js "task_$i/"
    cp -r task_0/.eslintrc.js "task_$i/"
    cp -r task_0/package.json "task_$i/"
    cp -r task_0/tsconfig.json "task_$i/"
    cp -r task_0/webpack.config.js "task_$i/"

done
