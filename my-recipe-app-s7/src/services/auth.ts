import firebase from 'firebase';

export class AuthService {


    signup(email:string, password:string) {
        return firebase.app().auth().createUserWithEmailAndPassword(email, password);
    }

    signin(email:string, password:string) {
        //var provider = new firebase.auth.GoogleAuthProvider();
        //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        //firebase.auth().signInWithPopup(provider)
        //    .then(result => console.info('Auth Google Result', result))
        //    .catch(error => console.info('error', error));
        return firebase.auth().signInWithEmailAndPassword(email, password);

    }

}