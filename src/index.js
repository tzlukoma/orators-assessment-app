import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import './Resources/css/shards.css'

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
=======
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'



const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(fbConfig, { useFirestoreForProfile:true, userProfile:'users', attachAuthIsReady: true }), // redux binding for firebase
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})


>>>>>>> 349e8da42fc15ddd0e685fc8f6035558d49322ad
