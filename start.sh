#!/bin/bash

npm run start --prefix ./angular-remote-app &
PID1=$!

npm run start --prefix ./angular-shell-app &
PID2=$!

npm run start --prefix ./angular-remote-different-version-app &
PID3=$!

npm run start --prefix ./react-app &
PID4=$!

cleanup() {
  echo "Terminating web servers..."
  kill $PID1 $PID2 $PID3 $PID4
}

trap cleanup EXIT

wait $PID1 $PID2 $PID3 $PID4