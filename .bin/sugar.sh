#!/bin/bash

COMMAND=$1
shift

PACKAGES=$1
shift

IFS=', '
read -r -a PARSED <<< "$PACKAGES"

if [[ -z "$PACKAGES" ]] || [[ ${#PARSED[@]} -gt 1 ]]; then
  eval "npx lerna run $COMMAND --scope=@zetsu/*{$PACKAGES} --parallel $@"
else
  eval "npx lerna run $COMMAND --scope=@zetsu/$PACKAGES --parallel $@"
fi
