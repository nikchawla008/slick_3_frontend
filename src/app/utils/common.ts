const NO_WHITE_SPACES_ONLY = (control: any) => {
  if (control.value && control.value.trim() != '') {
    return null;
  }
  else {
    return { 'required': true };
  }
}

export {
  NO_WHITE_SPACES_ONLY,
}
