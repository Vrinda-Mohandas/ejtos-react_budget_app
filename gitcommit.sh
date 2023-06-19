#!/bin/sh

Comments=$1
git config --global user.email "vrindacm91@gmail.com"
git config --global user.name "Vrinda-Mohandas"
git commit -a -m $Comments
git status
git push https://github.com/Vrinda-Mohandas/ejtos-react_budget_app.git
