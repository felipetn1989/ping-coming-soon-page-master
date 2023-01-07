notify.addEventListener("click", submit);

function isEmail(ifmail) {
  let mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (ifmail.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

function submit(x) {
  x.preventDefault();

  if (ifmail.value.length == 0 || isEmail(ifmail) == false) {
    ifmail.style.borderColor = "var(--Light-Red)";
    errorMsg.style.display = "block";
  } else {
    ifmail.style.borderColor = "var(--Pale-Blue)";
    errorMsg.style.display = "none";
  }
}
