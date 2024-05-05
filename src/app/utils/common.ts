const NO_WHITE_SPACES_ONLY = (control: any) => {
  if (control.value && control.value.trim() != '') {
    return null;
  }
  else {
    return { 'required': true };
  }
}

/**
 * Form state save and restore functionality
 */
const FORM_STATE_MANAGEMENT = {
  saveFormState: (formValues: any, currentStep: number) => {
    const formState = {
      formValues, currentStep
    }
    localStorage.setItem('formState', JSON.stringify(formState))
  },

  restoreFormState: () => {
    if(localStorage.getItem('formState')){
      return JSON.parse(localStorage.getItem('formState')!)
    }
    return null;
  },

  clearFormState: () => {
    localStorage.removeItem('formState')
  }
}

export {
  NO_WHITE_SPACES_ONLY,
  FORM_STATE_MANAGEMENT,
}
