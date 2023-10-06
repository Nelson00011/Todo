<h1 align="center">Todo Application</h1>

![TodoImage](https://github.com/Nelson00011/boho/assets/112737682/693efd03-09ba-4270-8e05-4ae8bb127f0a)
## Description
**Todo List** is a **React.js** application that is meant to provide a simple todo list function. PERN refresher application.
- The items are saved in a ***Postgres*** database using express.js & cors on the backend. 
- PERN refresher application *Postgres*, *Express.js*, *React.js*, *Node*.


## Technology Stack
**Front-End:** HTML5, CSS, React.js

**APIs:**  N/A

**Back-End:**  Postgres, Node.js, Express.js


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

### Back-End Helpful Hints (Node.js)
#### Postgres, Express.js
- Make Postgres Server & install dependencies (see resources):
```
> mkdir server
> cd server
> npm init
> npm install pg cors express
> npm install nodemon
```
- `ctl-c` will stop the server side
- Make env (for passwords and gitignore)
- Generate Postgres Database (see resources)
- Use current Nodemon
```
nodemon index
```
- Run test with Postman as needed to test calls before connecting to client end.
--------------------------------------------------
### Deployment


## Resources:
- [REACT](https://react.dev/).js docs
    - [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) to allow styles to be treated like objects.
- [PostgreSQL](https://www.postgresql.org/) Database installation for device. `PORT: 5432`
    - Node Postgres APIS [info](https://node-postgres.com/apis/pool)
- **PostMan** for API Tests [here](https://www.postman.com/)
- **Docker** install info [here](https://www.docker.com/):
    - Dockerizing info [here](https://medium.com/mozilla-club-bbsr/dockerizing-a-mern-stack-web-application-ebf78babf136)
    - Postgres specific information [here](https://medium.com/@agusmahari/docker-how-to-install-postgresql-using-docker-compose-d646c793f216)


#### **style:** 
- **[Material UI CORE](https://mui.com/)** React UI LIBRARY *great for standardizing projects*
    - MUI Core installation [here](https://www.npmjs.com/package/@mui/material) & [here](https://mui.com/material-ui/getting-started/installation/)
    ```
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    npm install @material/icon-button
    ```
    - MUI React-text-field [info](https://mui.com/material-ui/react-text-field/)
    - MUI Palette [here](https://mui.com/material-ui/customization/palette/)
    - MUI Alert [here](https://mui.com/material-ui/react-alert/)
    - MUI with CSS Modules style library [here](https://mui.com/material-ui/guides/interoperability/)
    - Table formating [here](https://mui.com/material-ui/react-table/#basic-table)
    - Module Information [here](https://mui.com/material-ui/react-modal/)
- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 


#### **helpful hint:** 
- Always Stay Positive 
- Consider Sequalize for future projects [info](https://sequelize.org/)
- Issues using psql fixed [here](https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho)
- Windows Server may require for nodemon to run:
```
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
 ```