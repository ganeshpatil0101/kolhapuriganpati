import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Login from './Login';
import Register from './Register';
import Loader from '../components/Loader';
import getFirebase from "../firebase-config";

const AddMandal = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  useEffect(() => {
    const firebase = getFirebase();
    if (firebase) {
      setIsLoading(true);
      firebase.auth().onAuthStateChanged((authUser) => {
        setIsLoading(false);
        if (authUser) {
          setCurrentUser(authUser);
          setIsLogin(false);
        } else {
          setIsLogin(true);
          setCurrentUser(null);
        }
      });
    }
  }, []);

  function onLoginSuccess() {
    console.log('loginSUccesfully');
    setIsLogin(false);
  }
  function onLoginError(error) {
    console.error('loginError ', error);
  }
  function onRegisterSuccess() {
    console.log('registerSUccesfully');
  }
  function onRegisterError(error) {
    console.error('registerError ', error);
  }
  return (
    <Grid container>
      {isLoading && <Loader/>}
      {isLogin && !isLoading && <Login onSuccess={onLoginSuccess} onError={onLoginError} />}
      {!isLogin && !isLoading && <Register currentUser={currentUser} onSuccess={onRegisterSuccess} onError={onRegisterError} />}
    </Grid>
  );
};

export default AddMandal;