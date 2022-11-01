#!/bin/sh
set -u
URL="https://raw.githubusercontent.com/greymd/dotfiles/master/install.sh"
if [ -x "$(command -v curl)" ]; then
  /usr/bin/env bash -c "$(curl -fsSL ${URL})"
elif [ -x "$(command -v wget)" ]; then
  /usr/bin/env bash -c "$(wget -qO- ${URL})"
else
  echo "curl or wget is required"
  exit 1
fi
exit 0
