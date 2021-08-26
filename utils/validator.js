module.exports.validateRegister = (
  username,
  password,
  email,
  confirmpassword
) => {
  const errors = {};

  if (username.trim() == "") {
    errors.username = "Username is required";
  }

  if (email.trim() == "") {
    errors.email = "Email is required";
  }

  if (password.trim() == "") {
    errors.password = "Password is required";
  } else if (!password == confirmpassword) {
    errors.confirmpassword = "Password doest not matches";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLogin = (username, password) => {
  const errors = {};
  if (username.trim() == "") {
    errors.username = "Username is required";
  }

  if (password.trim() == "") {
    errors.password = "Password is required";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
