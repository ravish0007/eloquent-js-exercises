#!/bin/bash

git fetch
echo "fetched"
git pull
echo "pulled"
python3 readme_gen.py
echo "created readme"
git add notes/* deploy.sh README.md
echo "added new files"
git commit -m "auto-update"
echo "commited"
git push
echo "pushed"
