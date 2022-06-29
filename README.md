## Introduction

This repository is to practice about how git-flow works and how it is integrated with Vercel.

### Diagram

![Alt text](gitflow-diagram.jpg?raw=true "GitFlow Diagram")

### Steps

1. Features
   1. Create feature 1
   2. Create feature 2
2. Hotfix
   1. Test with `int` environment -> Test in `int` env
   2. After QA is all ok, merge to staging -> Test in `uat` env
   3. If all is ok in staging, then merge to main
3. Release
   1. Test with `int` environment -> Test in `int` env
   2. After QA is all ok, merge to staging -> Test in `uat` env
   3. If all is ok in staging, then merge to main
