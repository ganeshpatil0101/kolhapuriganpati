import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Login from './Login';
import Register from './Register';
const AddMandal = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [isRegister, setRegister] = React.useState(true);
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
      {isLogin && <Login onSuccess={onLoginSuccess} onError={onLoginError} />}
      {!isLogin && <Register onSuccess={onRegisterSuccess} onError={onRegisterError} />}
    </Grid>
  );
};

export default AddMandal;