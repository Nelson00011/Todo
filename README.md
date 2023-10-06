<h1 align="center">Todo Application</h1>

![image]
## Description
**Todo List** is a **React.js** application that is meant provide a simple todo list function. PERN refresher application
- The items are saved in a ***Postgres*** database.
- PERN refresher application *Postgres*, *Express*, *React*, *Node*.


## Technology Stack
**Front-End:** HTML5, CSS, React.js

**APIs:**   

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
- [PostgreSQL](https://www.postgresql.org/) Database installation for device. `PORT: 5432`
- - **PostMan** for API Tests [here](https://www.postman.com/)


#### **style:** 
- **[Material UI CORE](https://mui.com/)** React UI LIBRARY *great for standardizing projects*
    - MUI Core installation [here](https://www.npmjs.com/package/@mui/material) & [here](https://mui.com/material-ui/getting-started/installation/)
    ```
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    ```
    - MUI Palette [here](https://mui.com/material-ui/customization/palette/)
    - MUI Alert [here](https://mui.com/material-ui/react-alert/)
    - MUI with CSS Modules style library [here](https://mui.com/material-ui/guides/interoperability/)
    - Table formating [here](https://mui.com/material-ui/react-table/#basic-table)


#### **helpful hint:** 
- Always Stay Positive 
- Consider Sequalize for future projects [info](https://sequelize.org/)
- Issues using psql fixed [here](https://stackoverflow.com/questions/44272416/how-to-add-a-folder-to-path-environment-variable-in-windows-10-with-screensho)
- Windows Server may require for nodemon to run:
```
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
 ```

