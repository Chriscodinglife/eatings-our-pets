# eAtInG oUr PeTs

![site](/images/site.png)

This website is a satire and is purely intended as a joke. It pokes fun at the outlandish statement made by Donald Trump, claiming that ["immigrants are eating the pets."](https://www.nbcnews.com/politics/2024-election/trump-pushes-baseless-claim-immigrants-eating-pets-rcna170537)

None of the content on this site should be taken seriously, and it's meant to highlight the absurdity of such claims.

## Setup

Backend is using Django
Frontend is Vite + React + Typescript

## How To Run Django Backend Locally

Ensure a local postgres server is available to connect to and setup environment variables needed
Can reference Pipfile for python version

```bash
pipenv install
pipenv shell
cd backend
python manage.py runserver
```

## How To Run Vite/React Frontend Locally

```bash
nodenv install $(cat .node-version)
nodenv local $(cat .node-version)
cd frontend
npm install
npm run dev
```
