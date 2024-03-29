import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";
import {SubmissionService} from "../../services/submission.service";
import {NO_WHITE_SPACES_ONLY} from "../../utils/common";
import {NzMessageService} from "ng-zorro-antd/message";
import {AuthService} from "../../services/auth/auth.service";
import {yesNoQuestions, gender} from "../../utils/constants";

const STRING_EMPTY_VALIDATOR = [Validators.required, NO_WHITE_SPACES_ONLY]
const NUMBER_VALIDATOR = [Validators.required, Validators.min(0)]
const SINGLE_SELECT_VALIDATOR = [Validators.required]

@Component({
  selector: 'app-survey', templateUrl: './survey.component.html', styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  // Stepper
  step: number = 0;
  MAX_STEP: number = 16;
  language: 'english' | 'hindi' = 'english'


  q2Hindi = [
    "Market Research Company",
    "Advertising Agency",
    "Journalism/ TV/ Radio Reporting",
    "Manufacturer or retailer of FMCG/ packaged food/ beverage",
    "Owner of a Restaurant/ Hotel/ Outlets",
    "Working in a food products/ beverages/ restaurant manufacturing/ distribution/ marketing unit",
    "Banking",
    "None of the above"
  ]
  q2English = [
    "Market Research Company",
    "Advertising Agency",
    "Journalism/ TV/ Radio Reporting",
    "Manufacturer or retailer of FMCG/ packaged food/ beverage",
    "Owner of a Restaurant/ Hotel/ Outlets",
    "Working in a food products/ beverages/ restaurant manufacturing/ distribution/ marketing unit",
    "Banking",
    "None of the above"
  ]
  q2 = this.q2Hindi.map((each, index) => ({
    hindi: each, english: this.q2English[index]
  }))


  // Gender questions
  gender = gender;

  // YES/NO Questions
  yesNoQuestions = yesNoQuestions;

  q4Hindi = [
    "Electricity connection",
    "Ceiling fan",
    "LPG stove",
    "Two Wheeler",
    "Colour TV",
    "Refrigerator",
    "Washing Machine",
    "Personal Computer/ Laptop",
    "Car/Jeep/Van",
    "Air conditioner",
    "Agricultural Land"
  ]
  q4English = [
    "Electricity connection",
    "Ceiling fan",
    "LPG stove",
    "Two Wheeler",
    "Colour TV",
    "Refrigerator",
    "Washing Machine",
    "Personal Computer/ Laptop",
    "Car/Jeep/Van",
    "Air conditioner",
    "Agricultural Land"
  ]
  q4 = this.q4Hindi.map((each, index) => ({
    hindi: each, english: this.q4English[index]
  }))

  q8Hindi = [
    "Illiterate",
    "Literate but no formal schooling",
    "School – Up to 4th Standard",
    "5th-9th standard",
    "SSC/HSC (10TH-12TH)",
    "Some College (incl. dip) but not graduate",
    "Graduate- General (B.A., B.Sc., B.Com.)",
    "Graduate – Professional (B.E., M.B.B.S., B.Tech)",
    "Post-Graduate – General (M.A., M.Sc., M.Com, M. Phil, PHD)",
    "Post-Graduate- Professional (M.E., M.Tech, MBA, etc.)"
  ]
  q8English = [
    "Illiterate",
    "Literate but no formal schooling",
    "School – Up to 4th Standard",
    "5th-9th standard",
    "SSC/HSC (10TH-12TH)",
    "Some College (incl. dip) but not graduate",
    "Graduate- General (B.A., B.Sc., B.Com.)",
    "Graduate – Professional (B.E., M.B.B.S., B.Tech)",
    "Post-Graduate – General (M.A., M.Sc., M.Com, M. Phil, PHD)",
    "Post-Graduate- Professional (M.E., M.Tech, MBA, etc.)"
  ]
  q8 = this.q8Hindi.map((each, index) => ({
    hindi: each, english: this.q8English[index]
  }))

  q9Hindi = [
    "Unskilled Worker",
    "Skilled Worker",
    "Petty Traders",
    "Shop Owner",
    "Businessman/ Industrialist with number of employees",
    "None",
    "1-9",
    "10+",
    "Self-employed professional",
    "Clerk/Salesman",
    "Supervisory level",
    "Officer/ Executive- Junior",
    "Officer/ Executive- Middle/ Senior",
    "Student",
    "Retired",
    "Unemployed",
    "Housewife",
    "Others (Please Specify _______________________)"
  ]
  q9English = [
    "Unskilled Worker",
    "Skilled Worker",
    "Petty Traders",
    "Shop Owner",
    "Businessman/ Industrialist with number of employees",
    "None",
    "1-9",
    "10+",
    "Self-employed professional",
    "Clerk/Salesman",
    "Supervisory level",
    "Officer/ Executive- Junior",
    "Officer/ Executive- Middle/ Senior",
    "Student",
    "Retired",
    "Unemployed",
    "Housewife",
    "Others (Please Specify _______________________)"
  ]
  q9 = this.q9Hindi.map((each, index) => ({
    hindi: each, english: this.q9English[index]
  }))

  q10Hindi = [
    "I consume Fast Food on special occasions like party, family function/ get together, while celebrating with friends",
    "I consume Fast Food whenever I feel like – anytime and any where",
    "I don’t like consuming Fast Food or consume it very infrequently"
  ]
  q10English = [
    "I consume Fast Food on special occasions like party, family function/ get together, while celebrating with friends",
    "I consume Fast Food whenever I feel like – anytime and any where",
    "I don’t like consuming Fast Food or consume it very infrequently"
  ]
  q10 = this.q10Hindi.map((each, index) => ({
    hindi: each, english: this.q10English[index]
  }))


  q11Hindi = [
    "Burger/Sandwich",
    "Pizza",
    "Burrito",
    "Pasta",
    "Garlic Bread",
    "Taco",
    "Quesadilla",
    "Fried Chicken",
    "Rice Bowl",
    "Others"
  ]
  q11English = [
    "Burger/Sandwich",
    "Pizza",
    "Burrito",
    "Pasta",
    "Garlic Bread",
    "Taco",
    "Quesadilla",
    "Fried Chicken",
    "Rice Bowl",
    "Others"
  ]
  q11 = this.q11Hindi.map((each, index) => ({
    hindi: each, english: this.q11English[index]
  }))

  q12Hindi = [
    "Domino’s Pizza",
    "Pizza Hut",
    "Taco Bell",
    "Ovenstory",
    "Mojo Pizza",
    "Onesta",
    "Chicago Pizza",
    "McDonald's",
    "Burger King",
    "KFC",
    "Haldiram’s",
    "Pizza Express",
    "Others"
  ]
  q12English = [
    "Domino’s Pizza",
    "Pizza Hut",
    "Taco Bell",
    "Ovenstory",
    "Mojo Pizza",
    "Onesta",
    "Chicago Pizza",
    "McDonald's",
    "Burger King",
    "KFC",
    "Haldiram’s",
    "Pizza Express",
    "Others"
  ]
  q12 = this.q12Hindi.map((each, index) => ({
    hindi: each, english: this.q12English[index]
  }))

  q13Hindi = [
    "In last 3 months",
    "Once in last 4-9 months",
    "More than 9 months ago"
  ]
  q13English = [
    "In last 3 months",
    "Once in last 4-9 months",
    "More than 9 months ago"
  ]
  q13 = this.q13Hindi.map((each, index) => ({
    hindi: each, english: this.q13English[index]
  }))


  q14Hindi = [
    "It’s me who decides the brand of Fast Food that I want to consume",
    "I express my opinion and mutually decide with others the brand of Fast Food",
    "I hardly have any opinion when it comes to Fast Food brands, I consume whatever others decide to consume"
  ]
  q14English = [
    "It’s me who decides the brand of Fast Food that I want to consume",
    "I express my opinion and mutually decide with others the brand of Fast Food",
    "I hardly have any opinion when it comes to Fast Food brands, I consume whatever others decide to consume"
  ]
  q14 = this.q14Hindi.map((each, index) => ({
    hindi: each, english: this.q14English[index]
  }))

  q15Hindi = [
    "Willing to participate",
    "Not willing to participate",
  ]
  q15English = [
    "Willing to participate",
    "Not willing to participate",
  ]
  q15 = this.q15Hindi.map((each, index) => ({
    hindi: each, english: this.q15English[index]
  }))


  surveySubmitStarted = false;

  surveyForm = new FormGroup<any>({
    name: new FormControl(null, STRING_EMPTY_VALIDATOR),
    contactNumber: new FormControl(null, STRING_EMPTY_VALIDATOR),

    surveyorName: new FormControl(null, STRING_EMPTY_VALIDATOR),
    date: new FormControl(null, SINGLE_SELECT_VALIDATOR),
    place: new FormControl(null, STRING_EMPTY_VALIDATOR),


    q1: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q2: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q3: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q4: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q5: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q7: new FormControl<any>(null, NUMBER_VALIDATOR),

    q8: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q9: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q10: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q11: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q13: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q14: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q15: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    interviewDateStart: new FormControl<any>(null),

  })

  stepMap: any = {
    0: {
      controls: []
    },

    1: {
      controls: ["q1"],
      question: [{
        hindi: "Q1. Have you participated in any market research survey in the past 3 months?",
        english: "Q1. Have you participated in any market research survey in the past 3 months?"
      }]
    },

    2: {
      controls: ["q2"],
      question: [{
        hindi: "Q2. Do you or any member of your household work for any of these organizations?",
        english: "Q2. Do you or any member of your household work for any of these organizations?"
      }]
    },

    3: {
      controls: ["q3"], question: [{
        hindi: "Q3. Gender.",
        english: "Q3. Gender."
      }]
    },

    4: {
      controls: ["q4"],
      question: [{
        hindi: "Q4. Please take a look at this list and tell me which of these items do you have at home? (It could be owned by you, your family, or provided by the employer or it could be available in the house you live in; but it should be for the use of just you or your family).",
        english: "Q4. Please take a look at this list and tell me which of these items do you have at home? (It could be owned by you, your family, or provided by the employer or it could be available in the house you live in; but it should be for the use of just you or your family)."
      }],
    },

    5: {
      controls: ["q5"],
      question: [{
        hindi: "Q5.  I would now like to know something about the Chief Wage Earner (CWE) of your household. By Chief Wage Earner, I mean the person who contributes the maximum to the household expenditure. Please tell me the highest level to which he/she has studied?",
        english: "Q5.  I would now like to know something about the Chief Wage Earner (CWE) of your household. By Chief Wage Earner, I mean the person who contributes the maximum to the household expenditure. Please tell me the highest level to which he/she has studied?"
      }]
    },

    6: {
      controls: ["q6"],
      question: [{
        hindi: "Q6. Are you the Chief Wage Earner (CWE) in your household?",
        english: "Q6. Are you the Chief Wage Earner (CWE) in your household?"
      }]
    },

    7: {
      controls: ["q7"],
      question: [{
        hindi: "Q7. For classification purpose, may I ask your age in complete years",
        english: "Q7. For classification purpose, may I ask your age in complete years"
      }]
    },

    8: {
      controls: ["q8"],
      question: [{
        hindi: "Q8. Can you tell me the highest level to which you have studied?",
        english: "Q8. Can you tell me the highest level to which you have studied?"
      }]
    },

    9: {
      controls: ["q9"],
      question: [{
        hindi: "Q9. Can you please tell me your occupation?",
        english: "Q9. Can you please tell me your occupation?"
      }]
    },

    10: {
      controls: ["q10"],
      question: [{
        hindi: "Q10. Which of the following statements best describes your Fast Food consumption behaviour?",
        english: "Q10. Which of the following statements best describes your Fast Food consumption behaviour?"
      }]
    },

    11: {
      controls: ["q11"],
      question: [{
        hindi: "Q11. Can you please tell me which of the products you are aware of from Fast Food Chains",
        english: "Q11. Can you please tell me which of the products you are aware of from Fast Food Chains"
      }]
    },

    12: {
      controls: ["q12"], question: [{
        hindi: "Q12. Can you please tell me which of the fast-food chain brands you are aware of",
        english: "Q12. Can you please tell me which of the fast-food chain brands you are aware of"
      }]
    },

    13: {
      controls: ["q13"], question: [{
        hindi: "Q13. When did you last eat/order from Taco Bell?",
        english: "Q13. When did you last eat/order from Taco Bell?"
      }]
    },

    14: {
      controls: ["q14"], question: [{
        hindi: "Q14. Considering your usual Fast Food consumption occasions, which of the following statements best describes your role in purchasing Fast Food for yourself?",
        english: "Q14. Considering your usual Fast Food consumption occasions, which of the following statements best describes your role in purchasing Fast Food for yourself?"
      }]
    },

    15: {
      controls: ["q15"],
      question: [{
        hindi: "Q15. As you have completely understood all the details of this study are you now willing to participate in the study? ",
        english: "Q15. As you have completely understood all the details of this study are you now willing to participate in the study? "
      }]
    },

    16: {
      controls: ["name", "contactNumber", "surveyorName", "date", "place"],
      question: []
    },
  }

  constructor(private modal: NzModalService, public submissionService: SubmissionService, public toastService: NzMessageService, public auth: AuthService,) {


    this.surveyForm.patchValue({
      interviewDateStart: new Date(),
    })
    this.applyValidations()

    navigator.geolocation.getCurrentPosition(() => {
    }, (err) => {
      if (err.code === 1) {
        this.toastService.error('Please allow location permissions on this browser')
      }
    })
  }

  async ngOnInit() {

  }


  /**
   * Go to next step
   */
  async nextStep() {
    const formValue = this.surveyForm.getRawValue()

    // FORM TERMINATION CONDITIONS

    // Q1
    if(formValue.q1 && formValue.q1! === 2) {
      this.openSurveyEndModal()
      return;
    }

    // Q2
    if(formValue.q2 && [1,2,3,4,5,6].includes(formValue.q2!)) {
      this.openSurveyEndModal()
      return;
    }

    // Q5
    if(formValue.q5) {

    }

    // Q7
    if(formValue.q7 && !(formValue.q7 <= 34 && formValue.q7! >= 18)) {
      this.openSurveyEndModal()
      return;
    }

    // Q8
    if(formValue.q8 && [1,2,3,4,5].includes(formValue.q8!)) {
      this.openSurveyEndModal()
      return;
    }

    // Q9
    if(formValue.q9 && [1,2,3,14,17].includes(formValue.q9!)) {
      this.openSurveyEndModal()
      return;
    }

    // Q10
    if(formValue.q10 && [1,3].includes(formValue.q10!)) {
      this.openSurveyEndModal()
      return;
    }

    // Q11 => 3,6,7 must be coded and at least 2 more products (at least 5)
    if(formValue.q11 && (!formValue.q11!.includes(3) || !formValue.q11!.includes(6) || !formValue.q11!.includes(7) || formValue.q11!.length < 5) ) {
      this.openSurveyEndModal()
      return;
    }

    // Q12 => 3 must be coded and at least 4 more brands (at least 5)
    if( formValue.q12 && (!formValue.q12!.includes(3) || formValue.q12!.length < 5) ) {
      this.openSurveyEndModal()
      return;
    }

    // Q13
    if( formValue.q13 && formValue.q13! === 1 ) {
      this.openSurveyEndModal()
      return;
    }

    // Q14
    if( formValue.q14 && (formValue.q14! === 2 || formValue.q14! === 3)) {
      this.openSurveyEndModal()
      return;
    }

    // Q15
    if( formValue.q15 && formValue.q15! === 2) {
      this.openSurveyEndModal()
      return;
    }

    if (this.step + 1 > this.MAX_STEP) {
      // Submit
      await this.submitSurveyForm();
    } else {
      this.goToNextStep(formValue)
    }
  }

  /**
   * Find next step according to question skipping logic
   * @param formValue
   */
  goToNextStep(formValue: any) {
    let nextStep = this.step + 1
    // QUESTION SKIPPING STEPS HERE
    this.step = nextStep > this.MAX_STEP ? this.MAX_STEP : nextStep;
  }

  /**
   * Go to previous step
   */
  prevStep() {
    let prevStep = this.step > 0 ? this.step - 1 : 0
    const formValue = this.surveyForm.getRawValue()

    // BACK IN CASE OF QUESTION SKIP INSTRUCTIONS HERE

    this.clearControl();
    this.step = prevStep
  }

  /**
   * Reset form and go to step 1
   */
  async goToStep1() {
    this.step = 1
    this.surveyForm.reset()
    this.surveyForm.patchValue({
      interviewDateStart: new Date(),
    })
  }

  /**
   * Getter for form controls
   */
  get personalInformationFormControls() {
    return this.surveyForm.controls
  }

  /**
   * Disable next button
   */
  get disableNext() {
    // return false
    const stepMapControls = this.stepMap[this.step].controls
    return stepMapControls.some((each: string) => this.personalInformationFormControls[each]!.invalid)
  }

  /**
   * Apply Validations
   */
  applyValidations() {

  }

  /**
   * Go back to step one after survey submission success modal closed
   */
  async closeSurveyEndModal() {
    await this.goToStep1()
  }

  /**
   * Survey termination modal
   */
  openSurveyEndModal() {
    this.modal.info({
      nzTitle: 'Thank you for taking part in this survey!',
      nzOkText: 'Close',
      nzOkType: 'primary',
      nzOnOk: () => this.closeSurveyEndModal(),
      nzClosable: false,
    });
  }

  /**
   * Submit survey form
   */
  async submitSurveyForm() {
    const formData = this.surveyForm.getRawValue()


    const requestBody: any = {
      ...formData,
    }

    navigator.geolocation.getCurrentPosition((position) => {
      requestBody.latitude = position.coords.latitude
      requestBody.longitude = position.coords.longitude
      console.log(requestBody)
      // this.apiCall(requestBody)
    }, err => {
      requestBody.latitude = 0
      requestBody.longitude = 0
      // this.apiCall(requestBody)
    })
  }

  /**
   * Call api and submit survey
   * @param requestBody
   */
  apiCall(requestBody: any) {
    this.surveySubmitStarted = true;
    this.submissionService.submitForm(requestBody).subscribe({
      next: async () => {
        this.surveySubmitStarted = false;
        this.surveyEndedMessage();
        // this.toastService.success('Survey Submitted Successfully!!')
      }, error: (err) => {
        this.surveySubmitStarted = false;
        this.toastService.error(err.error.message);
      }
    })
  }

  /**
   * Survey ended successfully message
   */
  surveyEndedMessage() {
    this.modal.success({
      nzTitle: 'Survey Submitted Successfully!!',
      nzOkText: 'Close',
      nzOkType: 'primary',
      nzOnOk: async () => await this.closeSurveyEndModal(),
      nzClosable: false,
    });
  }

  /**
   * Clear control on back button
   */
  clearControl() {
    const currentStep = this.step
    if (this.stepMap[currentStep]) {
      this.stepMap[currentStep].controls.forEach((eachControl: string) => {
        this.surveyForm.get(eachControl)?.reset()
      })
    }
  }

  /**
   * Get info of current user
   */
  get currentUserInfo() {
    return this.auth.currentUser.getValue()
  }

  /**
   * Typecast Abstract control as Form Control
   * @param control
   */
  returnAsFormControl(control: AbstractControl) {
    return control as FormControl
  }

  /**
   * Change language of question
   */
  switchLanguage() {
    this.language = this.language === 'english' ? 'hindi' : 'english'
  }

  get isMobile() {
    return window.innerWidth <= 1200
  }
}
