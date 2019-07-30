export const deleteContact = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('contact').doc(id).delete().then(() => {
            dispatch({ type: 'DELETE_CONTACT', id})
        }).catch((err) =>{
            dispatch({ type: 'DELETE_CONTACT_ERROR', err});
        })
    }
};

export const createContact = (contact) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('contact').add({
            ...contact,
            sentOn: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CONTACT', contact })
        }).catch((err) =>{
            dispatch({ type: 'CREATE_CONTACT_ERROR', err });
        })
    }
};