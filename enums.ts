enum LoginError {
  EmailNotVerified = "EMAIL_NOT_VERIFIED",
  UserNotFount = "USER_NOT_FOUND",
  InvalidCredentials = "INVALID_CREDENTIALS",
}

function handleLoginError(error: LoginError): string {
  switch (error) {
    case LoginError.EmailNotVerified:
      return "Please verify your email address.";
    case LoginError.UserNotFount:
      return "User not found.";
    case LoginError.InvalidCredentials:
      return "Invalid credentials.";
  }
}

console.log(handleLoginError(LoginError.InvalidCredentials));
