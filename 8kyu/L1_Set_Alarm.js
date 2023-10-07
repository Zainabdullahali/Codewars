function setAlarm(employed, vacation) {
  if (vacation === false && employed === true) {
    return true;
  } else {
    return false;
  }
}
