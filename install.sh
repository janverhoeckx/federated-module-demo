#!/bin/bash

npm install --prefix ./angular-remote-app &
PID1=$!

npm install --prefix ./angular-shell-app &
PID2=$!

npm install --prefix ./angular-remote-different-version-app &
PID3=$!

npm install --prefix ./react-app &
PID4=$!

wait $PID1 $PID2 $PID3 $PID4