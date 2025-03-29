#!/bin/bash

# Exit on any error
set -e

# Check if filename provided
if [ -z "$1" ]; then
  echo "Usage: ./run-ts.sh filename.ts"
  exit 1
fi

TS_FILE="$1"
JS_FILE="${TS_FILE%.ts}.js"

# Compile TypeScript
tsc "$TS_FILE"

# Run JS file
node "$JS_FILE"

# Remove JS file after success
rm "$JS_FILE"
