import React from "react";
import Form from "../components/Form";

function Login() {
  
  return (
    <div>
      <Form route="/api/token/" method="login" name="Login" />
    </div>
  );
}

export default Login;
