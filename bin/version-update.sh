#!/usr/bin/env zsh

set -eu

version=`cat package.json | grep version | sed 's/\s*"version": "//g; s/",//g'`

tmpfile=`mktemp`
echo $version > $tmpfile
$EDITOR $tmpfile

newVersion=`head -n 1 $tmpfile`

rg --ignore-file <(echo yarn.lock) -l $version | xargs sed -i "s/$version/$newVersion/g"

rm $tmpfile
