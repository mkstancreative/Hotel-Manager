import React, { useState } from "react";
import SignUp from "../pages/SignUp";
import FormSuccess from "../Forms/FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>{!isSubmitted ? <SignUp submitForm={submitForm} /> : <FormSuccess />}</>
  );
};

export default Form;
