import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./rootReducer";
import {updateAuthStore} from "./models/redux/actions-creators/authActionsCreators";


export const history = createBrowserHistory()

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
        thunk
    )
))



// if (localStorage.jwtToken) {
//     tokenInterceptor(localStorage.jwtToken);
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
// }

const potentialToken = localStorage.getItem('jwtToken')
const potentialUser = localStorage.getItem('user')
if (potentialToken !== null && potentialUser !== null) {
    const updateData = {
        token: potentialToken,
        user: potentialUser
    }
    store.dispatch(updateAuthStore(updateData))
}
else {
    history.push({
        pathname: '/sign-in',
        search: '?Authentication=none',
    })
    localStorage.clear()
}



ReactDOM.render(
    //<React.StrictMode>
            <Provider store = {store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
    //</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
