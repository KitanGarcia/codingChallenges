#!/usr/bin/env bash

main() {
  name=$1

  # checks if number of arguments is empty
  if [ $# -eq 0 ]; then
    name="you"
  fi
  echo "One for $name, one for me."

}

main "$@"
