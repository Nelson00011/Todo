<h1 align="center">Todo Application</h1>

![image]
## Description
**Todo List** is a **React.js** application that is meant provide a simple todo list function. 
- The items are saved in a ***Postgres*** database. 


## Technology Stack
**Front-End:** HTML5, CSS, React.js

**APIs:**   

**Back-End:**  Postgres, Node.js


## Run Code (Environment)
### React.js Helpful Hints (Node.js)
- confirm that config is up to date:

```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependencies (localhost: 3000):
```
> npx create-react-app <project name>
> cd <project name>
```
- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npm run dev
```
- Run test with Postman as needed to test calls before connecting to client end.

### Back-End Helpful Hints (Node.js)
#### Postgres
- Make Postgres Server (see resources):
```
> mkdir server
> cd server
> npm init
> npm install pg cors express
> npm install nodemon
```
- `ctl-c` will stop the server side
- Make env (do not place dashes in name ever)
```
npm install env-cmd
```

--------------------------------------------------
### Deployment


## Resources:
- [REACT](https://react.dev/).js docs
    - [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.
- [PostgreSQL](https://www.postgresql.org/) installation for device. PORT: 5432

#### **style:** 

#### **helpful hint:** 
- Always Stay Positive & When in Doubt Double Check Permissions :) 
- Consider Sequalize for future projects [info](https://sequelize.org/)
- Issues using psql fixed [here](https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho)
- Windows Server may require for nodemon to run:
```
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
 ```

