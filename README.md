# Exercise tracker (Django and React)

The exercise tracker app build in Django, React and Redux. Data is stored in PostgreSQL database and the REST API was build with Django (and Python).
React frontend is an app within the Django app. Javascript code is compiled using Babel.
Redux handles state changes in the app utilizing store, reducers and actions.

App contains a table where activity, duration and user are shown. New activities can be posted to the database using a form. The user needs to log in to see their data. Users are authenticated with token created by django-rest-knox. Log out invalidates the token from localStorage and backend.

First create Python virtual environment.

```
python -m venv venv
```

Activate virtual environment

```
venv/Scripts/activate
```

Or

```
venv/bin/activate
```

Install requirements using pip.

```
pip install
```

Install React dependencies

```
npm install
```

Build main.js using

```
npm run dev
```
