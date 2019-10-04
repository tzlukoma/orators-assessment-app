import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

// require('dotenv').config()



const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig, { logErrors: true, enableLogging: true }),
    reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true }) // redux binding for firebase
     // redux bindings for firestore
));

store.firebaseAuthIsReady.then(() => {
    fbConfig.auth().onAuthStateChanged((user) => {
        ReactDOM.render(<Provider store={store}><App user={user}/></Provider>, document.getElementById('root'));
        serviceWorker.unregister();
    })

})


