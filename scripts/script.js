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
    let errorMsg = document.createElement('span')
    errorMsg.innerText = `Please provide a valid email address`
    errorMsg.style.textAlign = 'left'
    errorMsg.style.color = 'var(--Light-Red)'
    errorMsg.style.fontSize = '.75rem'
    errorMsg.style.margin = '.5rem 3rem'
    mail_form.appendChild(errorMsg)
  } else {
    ifmail.style.borderColor = "var(--Pale-Blue)";
  }
}
