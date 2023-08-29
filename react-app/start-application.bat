@echo off
title Web Application
echo Starting Web Application.
cd webapp
python main.py
cd ..
npm start
pause