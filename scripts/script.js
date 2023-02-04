notify.addEventListener("click", submit);

/* Regex to test if the string provided on the mail form is a valid e-mail address */

let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

/* Function do display the error message and do the appropriate styling changes if the e-mail is not valid or no e-mail is provided by the user */

function submit(x) {
  x.preventDefault();

  if (ifmail.value.length == 0 || !mailformat.test(ifmail.value)) {
    ifmail.style.borderColor = "var(--Light-Red)";
    errorMsg.style.display = "block";
  } else {
    ifmail.style.borderColor = "var(--Pale-Blue)";
    errorMsg.style.display = "none";
  }
}
