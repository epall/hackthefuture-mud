#!/bin/sh
find world | sudo xargs chown epall:staff
find world -type d | xargs chmod 777
find world -type f | xargs chmod 666
git add world
git commit -m "checkpoint"
