import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import rootReducer from './store/reducers/rootReducer'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import firebaseConfig from './config/firebase'

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),
        reduxFirestore(firebaseConfig)
    )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

