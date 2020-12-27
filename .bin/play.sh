#!/bin/bash
PACKAGE=$1
shift

eval "yarn workspace @zetsu/$PACKAGE $@"
