#!/bin/bash

COMMAND=$1
shift

PACKAGES=$1
shift

IFS=', '
read -r -a PARSED <<< "$PACKAGES"

if [[ -z "$PACKAGES" ]]; then
  echo "You should pass a package or a list of packages."

  exit
fi

if [[ ${#PARSED[@]} -gt 1 ]]; then
  eval "yarn lerna run $COMMAND --scope=@zetsu/*{$PACKAGES} --parallel $@"
else
  eval "yarn lerna run $COMMAND --scope=@zetsu/$PACKAGES --parallel $@"
fi
