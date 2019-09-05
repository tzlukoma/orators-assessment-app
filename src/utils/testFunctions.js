import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import rootReducer from '../store/reducers/rootReducer'
import fbConfig from '../config/fbConfig'

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
export default function renderWithRedux(
        ui,
        { initialState, store = createStore(rootReducer, composeWithDevTools(
            applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
            reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true }), // redux binding for firebase
            reduxFirestore(fbConfig) // redux bindings for firestore
        )) } = {}
) {
        return {
                ...render(<Provider store={store}>{ui}</Provider>),
                // adding `store` to the returned utilities to allow us
                // to reference it in our tests (just try to avoid using
                // this to test implementation details).
                store,
        }
}