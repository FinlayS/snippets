#!/bin/sh
#husky 0.14.3

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

has_hook_script () {
  [ -f package.json ] && cat package.json | grep -q "\"$1\"[[:space:]]*:"
}

cd "."

# Check if commitmsg script is defined, skip if not
has_hook_script commitmsg || exit 0

load_nvm () {
  # If nvm is not loaded, load it
  command_exists nvm || {
    export NVM_DIR=/Users/MY_LOCAL_USERNAME/.nvm
    [ -s "$1/nvm.sh" ] && . "$1/nvm.sh"
  }

  # If nvm has been loaded correctly, use project .nvmrc
  command_exists nvm && [ -f .nvmrc ] && nvm use
}

# Add common path where Node can be found
# Brew standard installation path /usr/local/bin
# Node standard installation path /usr/local
export PATH="$PATH:/usr/local/bin:/usr/local"

# nvm path with standard installation
load_nvm /Users/MY_LOCAL_USERNAME/.nvm

# nvm path installed with Brew
load_nvm /usr/local/opt/nvm

# Check that npm exists
command_exists npm || {
  echo >&2 "husky > can't find npm in PATH, skipping commitmsg script in package.json"
  exit 0
}

# Export Git hook params
export GIT_PARAMS="$*"

# Run npm script
echo "husky > npm run -s commitmsg (node `node -v`)"
echo

npm run -s commitmsg || {
  echo
  echo "husky > commit-msg hook failed (add --no-verify to bypass)"
  exit 1
}