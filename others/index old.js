//#region submit button
const submitButton = document.querySelector(".submit-form-button");
function handleSubmitButton(e) {
  const emailElementValue = getFieldValueByClassName("email-field__input");
  const isEmailValid = validateEmail(emailElementValue);

  const invalidInputElement = document.querySelector(
    ".email-field__invalid-email-input"
  );

  const btnOperation = e.target.dataset.operation;
  if (btnOperation === "sign-in" || btnOperation === "single-sign-on") {
    const invalidPasswordElement = document.querySelector(
      ".password-field__invalid-password-input"
    );
    const passwordElementValue = getFieldValueByClassName(
      "password-field__input"
    );
    const isPasswordValid = validatePassword(passwordElementValue);

    if (!isEmailValid) {
      handleInvalidEmailWhenSubmit();
    }
    if (!isPasswordValid) {
      handleInvalidPasswordWhenSubmit();
    } else {
      passwordFieldInput.style.borderColor = "";
      if (invalidPasswordElement) {
        invalidPasswordElement.remove();
      }
    }
    if (isEmailValid && isPasswordValid) {
      emailFieldInput.style.borderColor = "";
      //TODO:
      if (btnOperation === "sign-in") {
      }
      if (btnOperation === "single-sign-on") {
      }
    }
  } else if (btnOperation === "sign-up") {
    if (!isEmailValid) {
      handleInvalidEmailWhenSubmit();
    } else {
      emailFieldInput.style.borderColor = "";
      if (invalidInputElement) {
        invalidInputElement.remove();
      }
      //TODO:
    }
  }
}
submitButton.onclick = handleSubmitButton;
//#endregion

//#region email & password Fields
// const emailFieldInput = document.querySelector(".email-field__input");
const passwordFieldInput = document.querySelector(".password-field__input");
const emailFieldInput_signUpPage = document.querySelector(
  '[data-page="sign-up"] .email-field__input'
);
const emailFieldInput_singleSignOnPage = document.querySelector(
  '[data-page="single-sign-on"] .email-field__input'
);
const emailFieldInput_cloudAdminPage = document.querySelector(
  '[data-page="cloud-admin"] .email-field__input'
);
const emailFieldInput_forgotPasswordPage = document.querySelector(
  '[data-page="forgot-password"] .email-field__input'
);
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function handleEmailInput(
  emailElementValueSelector,
  invalidInputElementSelector,
  _emailFieldInput
) {
  const emailElementValue = getFieldValueBySelector(emailElementValueSelector);
  const isEmailValid = validateEmail(emailElementValue);
  const invalidInputElement = document.querySelector(
    invalidInputElementSelector
  );
  if (!isEmailValid) {
    if (!invalidInputElement) {
      addInvalidEmailTextErrorToDOM(_emailFieldInput);
    }
  } else {
    _emailFieldInput.style.borderColor = "";
    if (invalidInputElement) {
      invalidInputElement.remove();
    }
  }
}

emailFieldInput_signUpPage.addEventListener(
  "input",
  debounce((e) => {
    handleEmailInput(
      "[data-page='sign-up'] .email-field__input",
      "[data-page='sign-up'] .email-field__invalid-email-input",
      emailFieldInput_signUpPage
    );
  }, 1000)
);
emailFieldInput_singleSignOnPage.addEventListener(
  "input",
  debounce((e) => {
    handleEmailInput(
      '[data-page="single-sign-on"] .email-field__input',
      '[data-page="single-sign-on"] .email-field__invalid-email-input',
      emailFieldInput_singleSignOnPage
    );
  }, 1000)
);
emailFieldInput_cloudAdminPage.addEventListener(
  "input",
  debounce((e) => {
    handleEmailInput(
      '[data-page="cloud-admin"] .email-field__input',
      '[data-page="cloud-admin"] .email-field__invalid-email-input',
      emailFieldInput_cloudAdminPage
    );
  }, 1000)
);
emailFieldInput_forgotPasswordPage.addEventListener(
  "input",
  debounce((e) => {
    handleEmailInput(
      '[data-page="forgot-password"] .email-field__input',
      '[data-page="forgot-password"] .email-field__invalid-email-input',
      emailFieldInput_forgotPasswordPage
    );
  }, 1000)
);

function addInvalidEmailTextErrorToDOM(_emailFieldInput) {
  _emailFieldInput.style.borderColor = "red";
  const invalidEmailErrorTextElement = document.createElement("div");
  invalidEmailErrorTextElement.className = "email-field__invalid-email-input";
  invalidEmailErrorTextElement.textContent =
    "This doesn't seem to be a valid email. Try again.";
  _emailFieldInput.parentElement.appendChild(invalidEmailErrorTextElement);
}
function handleInvalidEmailWhenSubmit() {
  const invalidEmailInputElement = document.querySelector(
    ".email-field__invalid-email-input"
  );
  if (!invalidEmailInputElement) {
    addInvalidEmailTextErrorToDOM();
  }
}
function addInvalidPasswordTextErrorToDOM() {
  passwordFieldInput.style.borderColor = "red";
  const invalidPasswordErrorTextElement = document.createElement("div");
  invalidPasswordErrorTextElement.className =
    "password-field__invalid-password-input";
  invalidPasswordErrorTextElement.textContent =
    "This doesn't seem to be a valid password. Try again.";
  passwordFieldInput.parentElement.appendChild(invalidPasswordErrorTextElement);
}
function handleInvalidPasswordWhenSubmit() {
  const invalidPasswordInputElement = document.querySelector(
    ".password-field__invalid-password-input"
  );
  if (!invalidPasswordInputElement) {
    addInvalidPasswordTextErrorToDOM();
  }
}

const signUpButton = document.querySelector(
  "[data-page='sign-up'] .submit-form-button"
);
const singleSignOnButton = document.querySelector(
  '[data-page="single-sign-on"] .submit-form-button'
);
const cloudAdminSignInButton = document.querySelector(
  '[data-page="cloud-admin"] .submit-form-button'
);
const forgotPasswordEmailInstructionButton = document.querySelector(
  '[data-page="forgot-password"] .submit-form-button'
);
signUpButton.onclick = handleSignUp;
singleSignOnButton.onclick = handleSingleSignOn;
cloudAdminSignInButton.onclick = handleCloudAdminSignIn;
forgotPasswordEmailInstructionButton.onclick = handleForgotPasswordEmail;

function handleSignUp() {
  const signUpEmailValue = getFieldValueBySelector(
    '[data-page="sign-up"] .email-field__input'
  );
  const signUpPasswordValue = getFieldValueBySelector(
    '[data-page="sign-up"] .password-field__input'
  );
  // TODO:
}
function handleSingleSignOn() {
  const singleSignInEmailValue = getFieldValueBySelector(
    '[data-page="single-sign-on"] .email-field__input'
  );
  const singleSignInPasswordValue = getFieldValueBySelector(
    '[data-page="single-sign-on"] .password-field__input'
  );
  // TODO:
}
function handleCloudAdminSignIn() {
  const cloudAdminEmailValue = getFieldValueBySelector(
    '[data-page="cloud-admin"] .email-field__input'
  );
  const cloudAdminPasswordValue = getFieldValueBySelector(
    '[data-page="cloud-admin"] .password-field__input'
  );
  // TODO:
}
function handleForgotPasswordEmail() {
  const emailValue = getFieldValueBySelector(
    '[data-page="forgot-password"] .email-field__input'
  );
  // TODO:
}
//#endregion

// function goToSignUp() {
//   const forgetPasswordLabel = document.querySelector(".forgot-password");
//   const passwordSection = document.querySelector(".password-section");
//   forgetPasswordLabel.style.display = "none";
//   passwordSection.style.display = "none";

//   const submitButton = document.querySelector(".submit-form-button");
//   submitButton.textContent = "SIGN UP";
//   submitButton.dataset.operation = "sign-up";

//   const goToSignUpLabel = document.querySelector(".go-to-sign-up");
//   goToSignUpLabel.style.display = "none";
//   const goToSignInLabel = document.querySelector(".go-to-sign-in");
//   goToSignInLabel.style.display = "block";
// }

function goToSignIn() {
  // const forgetPasswordLabel = document.querySelector(".forgot-password");
  // const passwordSection = document.querySelector(".password-section");
  // forgetPasswordLabel.style.display = "block";
  // passwordSection.style.display = "block";

  // const submitButton = document.querySelector(".submit-form-button");
  // submitButton.textContent = "CONTINUE";
  // submitButton.dataset.operation = "sign-in";

  // const goToSignUpLabel = document.querySelector(".go-to-sign-up");
  // goToSignUpLabel.style.display = "block";
  // const goToSignInLabel = document.querySelector(".go-to-sign-in");
  // goToSignInLabel.style.display = "none";

  showPage("single-sign-on");
}

function goToSignUp() {
  showPage("sign-up");
}

function showPage(pageName) {
  const signUpPage = document.querySelector('[data-page="sign-up"]');
  const singleSignInPage = document.querySelector(
    '[data-page="single-sign-on"]'
  );
  const cloudAdminPage = document.querySelector('[data-page="cloud-admin"]');
  const forgotPasswordPage = document.querySelector(
    '[data-page="forgot-password"]'
  );

  switch (pageName) {
    case "sign-up":
      signUpPage.style.display = "grid";
      hidePages([singleSignInPage, cloudAdminPage, forgotPasswordPage]);
      break;
    case "single-sign-on":
      singleSignInPage.style.display = "grid";
      hidePages([signUpPage, cloudAdminPage, forgotPasswordPage]);
      break;
    case "cloud-admin":
      cloudAdminPage.style.display = "grid";
      hidePages([signUpPage, singleSignInPage, forgotPasswordPage]);
      break;
    case "forgot-password":
      forgotPasswordPage.style.display = "grid";
      hidePages([signUpPage, singleSignInPage, cloudAdminPage]);
      break;
    default:
      break;
  }
}

function hidePages(pages) {
  pages.forEach((page) => {
    page.style.display = "none";
  });
}

function toggleShowPassword() {
  const passwordFieldInput = document.querySelector(".password-field__input");
  passwordFieldInput.type === "text"
    ? (passwordFieldInput.type = "password")
    : (passwordFieldInput.type = "text");
}

function getFieldValueByClassName(className) {
  const input = document.querySelector(`.${className}`);
  return input.value;
}

function getFieldValueBySelector(selector) {
  const input = document.querySelector(`${selector}`);
  return input.value;
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
function validatePassword(password) {
  if (password.length > 0) {
    return true;
  }
  return false;
}

function handleSignByGoogle() {
  //TODO:
}
function handleSignByMicrosoft() {
  //TODO:
}

function singleSignOn_signinToCloudAdminPortal() {
  showPage("cloud-admin");
}
function goToSingleSignOn() {
  showPage("single-sign-on");
}
function forgotPassword() {
  showPage("forgot-password");
}

function chat() {
  //TODO:
}

startSignUpPage();
startSingleSignOnPage();

function startSignUpPage() {
  const passwordFieldInput = document.querySelector(
    "[data-page='sign-up'] .password-field__input"
  );
  const showPasswordBtn = document.querySelector(
    "[data-page='sign-up'] .show-password-icon"
  );
  const hidePasswordBtn = document.querySelector(
    "[data-page='sign-up'] .hide-password-icon"
  );
  showPasswordBtn.addEventListener("click", (e) => {
    e.target.style.visibility = "hidden";
    hidePasswordBtn.style.visibility = "visible";
    passwordFieldInput.type = "text";
  });
  hidePasswordBtn.addEventListener("click", (e) => {
    e.target.style.visibility = "hidden";
    showPasswordBtn.style.visibility = "visible";
    passwordFieldInput.type = "password";
  });
}

function startSingleSignOnPage() {
  const passwordFieldInput = document.querySelector(
    "[data-page='single-sign-on'] .password-field__input"
  );
  const showPasswordBtn = document.querySelector(
    "[data-page='single-sign-on'] .show-password-icon"
  );
  const hidePasswordBtn = document.querySelector(
    "[data-page='single-sign-on'] .hide-password-icon"
  );
  showPasswordBtn.addEventListener("click", (e) => {
    e.target.style.visibility = "hidden";
    hidePasswordBtn.style.visibility = "visible";
    passwordFieldInput.type = "text";
  });
  hidePasswordBtn.addEventListener("click", (e) => {
    e.target.style.visibility = "hidden";
    showPasswordBtn.style.visibility = "visible";
    passwordFieldInput.type = "password";
  });
}
