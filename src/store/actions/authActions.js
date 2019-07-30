export const logIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() =>{
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
};

export const addProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) =>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
};