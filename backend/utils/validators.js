const validateRegisterInput = (email, password, firstname) => {
  const errors = {};
  // if (username.trim() === "") {
  //   errors.username = "Username must not be empty";
  // }
  if (firstname.trim() === "") {
    errors.firstname = "Name must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  }
  // RegEx is currently throwing an error
  // else {
  //   const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
  //   if (!email.match(regEx)) {
  //     errors.email = "Email must be a valid email address";
  //   }
  // }
  if (password === "") {
    errors.password = "Password must not empty";
  }
  // if we have a confirmPassword
  // else if (password !== confirmPassword) {
  //   errors.confirmPassword = "Passwords must match";
  // }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

const validateLoginInput = (email, password) => {
  const errors = {};
  if (email.trim() === "") {
    errors.email = "email must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export { validateLoginInput, validateRegisterInput };
