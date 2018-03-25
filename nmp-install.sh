#!/bin/bash

set -e
echo "installing ember(NPM) packging "

echo -e "\033[47;30m 1.ember-css-modules \033[0m"
ember install ember-css-modules

echo -e "\033[47;30m 2.ember-composable-helpers \033[0m"
ember install ember-composable-helpers

echo -e "\033[47;30m 3.ember-route-action-helper \033[0m"
ember install ember-route-action-helper

echo -e "\033[47;30m 4.postcss-extend \033[0m"
npm install postcss-extend --save-dev

echo -e "\033[47;30m 5.rucksack-css \033[0m"
npm i rucksack-css --save-dev

echo -e "\033[47;30m 6.ember-truth-helpers \033[0m"
npm i ember-truth-helpers --save-dev

echo -e "\033[47;30m 7.hack \033[0m"
npm i hack --save-dev

echo -e "\033[47;30m 8.postcss \033[0m"
npm i postcss --save-dev

echo -e "\033[47;30m 9.postcss-cssnext \033[0m"
npm i postcss-cssnext --save-dev

echo -e "\033[47;30m 10.postcss-import \033[0m"
npm i postcss-import --save-dev

set +e
echo "finish, have fun"
