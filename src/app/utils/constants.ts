const LOCAL_STORAGE_AUTH_NAME = 'survetricsUser'

const genderHindi = [
  "Male",
  "Female",
]
const genderEnglish = [
  "Male",
  "Female",
]
// Gender questions
const gender = genderHindi.map((each, index) => ({
  hindi: each, english: genderEnglish[index]
}))


const yesNoQuestionsHindi = [
  "Yes",
  "No",
]
const yesNoQuestionsEnglish = [
  "Yes",
  "No",
]
// YES/NO Questions
const yesNoQuestions = yesNoQuestionsHindi.map((each, index) => ({
  hindi: each, english: yesNoQuestionsEnglish[index]
}))

export {
  LOCAL_STORAGE_AUTH_NAME,
  gender,
  yesNoQuestions,
}
