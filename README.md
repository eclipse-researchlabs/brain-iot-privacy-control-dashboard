# Brain-IoT Privacy Dashboard
![image](public/images/logo_nome.png)

## Introduction

Web-based user interface which serves as interface for the data owners to set the policies associated to their own data. It also serves as an interface
for the service providers to set the data access requirements needed to provide the service. 
The policies defined by Data Owners and Data Consumers through the Privacy Dashboard are stored to the Authorization Server 
through the BrainPEP.



## Installation

### Prerequisites

1. Install [npm](https://www.npmjs.com/get-npm)


2. Install [yarn](https://yarnpkg.com/getting-started/install)

### `npm install -g yarn`

---

#### NOTE

Users need to be previously stored on Keycloak instance, providing them with a Realm level role which can be either:

- `brain_user` for base users; or
- `brain_consumer` for service providers.


### Configuration


In order to run the dashboard web-app, it is necessary to configure the service so that a Keycloak connection is established (it is expected that a running Keycloak instance is available) to retrieve a valid token and interact with the server.
Moreover, the BrainPEP hosting URL has to be set in the configuration file.

Inside `/src/utils/config.js`, please specify:

#### Keycloak settings

`REALM NAME` - Name of the Realm configured in Keycloak administration panel.

`CLIENT_ID` - Public Client ID enabled to interact with Keycloak to obtain access tokens via Authorization Code Flow.

`AUTH_ENDPOINT` - Keycloak URL to obtain access token.

#### BrainPEP settings

`BACKEND_ENDPOINT` - Backend base path. (es. http://your-backend-base-url/)

#### Front-end Redirect URI

`REDIRECT_URI` - Landing page after login with Keycloak auth provider. It can be either http://localhost:4000/login (run on localhost), or https://your_dashboard_hosting_url/login. 

#### IMPORTANT

It is necessary to configure Keycloak in order to allow redirection after login procedure, from the public Client administration panel :

1. `Valid Redirect URIs` - http://localhost:4000/* or https://your_dashboard_hosting_url/*

2. `Web Origins` http://localhost:4000 or https://your_dashboard_hosting_url

## Deployment

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `serve -s build`

Deploys the bundle obtained through `yarn build` script.

For more information about deployment of React JS web apps, visit:\
https://create-react-app.dev/docs/deployment/




## License
[Eclipse Public License - v 2.0](https://www.eclipse.org/legal/epl-2.0/)
