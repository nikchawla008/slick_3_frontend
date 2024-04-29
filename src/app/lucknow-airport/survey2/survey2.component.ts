import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SubmissionService } from 'src/app/services/submission.service';
import { NO_WHITE_SPACES_ONLY } from 'src/app/utils/common';
import { gender, rateQuestion } from 'src/app/utils/constants';

const STRING_EMPTY_VALIDATOR = [Validators.required, NO_WHITE_SPACES_ONLY]
const NUMBER_VALIDATOR = [Validators.required, Validators.min(0)]
const SINGLE_SELECT_VALIDATOR = [Validators.required]

@Component({
  selector: 'app-survey2',
  templateUrl: './survey2.component.html',
  styleUrls: ['./survey2.component.scss']
})
export class Survey2Component {
  [x: string]: any;
  step: number=0;
  MAX_STEP: number =42;
  language : 'english' | 'hindi' ='english';
  // mob_hide: boolean = true;

  q1Hindi=[
    "Have arrived after Train journey",
    "Will undertake Train journey after visit",
    "Came here while  waiting to receive relative/friend/colleague",
    "Came here for eating purpose"
  ]
  q1English=[
    "Have arrived after Train journey",
    "Will undertake Train journey after visit",
    "Came here while  waiting to receive relative/friend/colleague",
    "Came here for eating purpose"
  ]
  q1 = this.q1Hindi.map((each, index) => ({
    hindi: each, english: this.q1English[index]
  }))
  q2Hindi=[
    "Vegetarian",
    "Satvik/Jain",
    "Vegan",
    "Non-vegetarian (eggs and all types of meat)",
    "Eggetarian (Vegetarian but eat egg & egg products)"
  ]
  q2English=[
    "Vegetarian",
    "Satvik/Jain",
    "Vegan",
    "Non-vegetarian (eggs and all types of meat)",
    "Eggetarian (Vegetarian but eat egg & egg products)"
  ]
  q2 = this.q2Hindi.map((each, index) => ({
    hindi: each, english: this.q2English[index]
  }))
  q3Hindi=[
    "18 - 25 years",
    "26 - 40 years",
    "41 - 60 years",
    "61 or more years"
  ]
  q3English=[
    "18 - 25 years",
    "26 - 40 years",
    "41 - 60 years",
    "61 or more years"
  ]
  q3 = this.q3Hindi.map((each, index) => ({
    hindi: each, english: this.q3English[index]
  }))
  gender2=gender;
  rateQuestion=rateQuestion;
  surveySubmitStarted = false;
  surveyForm = new FormGroup<any>({
    name: new FormControl(null, STRING_EMPTY_VALIDATOR),
    contactNumber: new FormControl(null, STRING_EMPTY_VALIDATOR),
    email: new FormControl(null, Validators.email),
  
    q1: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q2: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q3: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q4: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q5: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6d: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6e: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6f: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6g: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6h: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6i: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6j: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6k: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q7a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q7b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q7c: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q7d: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q8a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q8b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q9a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q9b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q9c: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q9d: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q9e: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q10a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q10b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q11a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q11b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q11c: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q11d: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q11e: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q11f: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12c: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12d: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q13: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q14: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    interviewDateStart: new FormControl<any>(null),

  })
  stepMap: any = {
    0: {
      controls: []
    },

    1: {
      controls: ["q1"],
      question: [{
        hindi: "Q1. Purpose of Visit of Restaurant",
        english: "Q1. Purpose of Visit of Restaurant"
      }]
    },

    2: {
      controls: ["q2"],
      question: [{
        hindi: "Q2. Please	tell	us	if	you	are?",
        english: "Q2. Please	tell	us	if	you	are?",
      }]
    },

    3: {
      controls: ["q3"], question: [{
        hindi: "Q3. Your	Present	Age?",
        english: "Q3. Your	Present	Age?"
      }]
    },

    4: {
      controls: ["q4"],
      question: [{
        hindi: "Q4. Record	Gender?",
        english: "Q4. Record	Gender?"
      }],
    },

    5: {
      controls: ["q5"],
      question: [{
        hindi: "In the next few question, we would request you to rate your satisfaction/dissatisfaction with varios attributes",
        english: "In the next few question, we would request you to rate your satisfaction/dissatisfaction with varios attributes"
      }]
    },
    6: {
      controls: ["q6a"],
      question: [{
        hindi: "Q6. Overall Satisfaction with food and services ",
        english: "Q6. Overall Satisfaction with food and services ",
      }]
    },
    7: {
      controls: ["q6b"],
      question: [{
        hindi: "Q7. Quality of Food and beverages served ",
        english:"Q7. Quality of Food and beverages served",
      }]
    },
    8: {
      controls: ["q6c"],
      question: [{
        hindi:"Q8. Quality of Packaging of the food & beverages served",
        english: "Q8. Quality of Packaging of the food & beverages served",
      }]
    },
    9: {
      controls: ["q6d"],
      question: [{
        hindi: "Q9. Quantity of food and beverages served ",
        english: "Q9. Quantity of food and beverages served ",
      }]
    },
    10: {
      controls: ["q6e"],
      question: [{
        hindi: "Q10. Hygiene Level",
        english: "Q10. Hygiene Level",
      }]
    },
    11: {
      controls: ["q6f"],
      question: [{
        hindi: "Q11. Variety in Menu",
        english: "Q11. Variety in Menu",
      }]
    },
    12: {
      controls: ["q6g"],
      question: [{
        hindi:  "Q12. Staff Behaviour",
        english:  "Q12. Staff Behaviour",
      }]
    },
    13: {
      controls: ["q6h"],
      question: [{
        hindi: "Q13. Value for Money",
        english: "Q13. Value for Money"
      }]
    },
    14: {
      controls: ["q6i"],
      question: [{
        hindi: "Q14. Restaurant Temperature (Hot/Cold/Normal)",
        english: "Q14. Restaurant Temperature (Hot/Cold/Normal)"
      }]
    },

    15: {
      controls: ["q6j"],
      question: [{
        hindi: "Q15. Sufficient number of chairs and tables",
        english: "Q15. Sufficient number of chairs and tables",
      }]
    },

    16: {
      controls: ["q6k"],
      question: [{
        hindi: "Q16. Quality of chairs",
        english: "Q16. Quality of chairs"
      }]
    },

    17: {
      controls: ["q7a"],
      question: [{
        hindi: "Q17. Food Preparation (Properly cooked)",
        english: "Q17. Food Preparation (Properly cooked)",
      }]
    },

    18: {
      controls: ["q7b"],
      question: [{
        hindi: "Q18. Temperature - Food &Beverages(Hot/Cold/Normal)",
        english: "Q18. Temperature - Food &Beverages(Hot/Cold/Normal)",
          
      }]
    },

    19: {
      controls: ["q7c"],
      question: [{
        hindi:  "Q19. Freshness of Food",
        english:  "Q19. Freshness of Food",
      }]
    },

    20: {
      controls: ["q7d"], question: [{
        hindi: "Q20. Packaging Quality",
        english: "Q20. Packaging Quality",
      }]
    },

    21: {
      controls: ["q8a"], 
      question: [{
        hindi: "Q21. Sufficient Quantity of meal – Thali / Combos, Snacks (Sandwiches, Pizza, Kachori, etc.), Dessert (Ice cream, Mithai, Kulfis, etc.)",
        english: "Q21. Sufficient Quantity of meal – Thali / Combos, Snacks (Sandwiches, Pizza, Kachori, etc.), Dessert (Ice cream, Mithai, Kulfis, etc.)",
      }]
    },

    22: {
      controls: ["q8b"], question: [{
        hindi:  "Q22. Availability of Salt, pepper and sugar etc.",
        english: "Q22. Availability of Salt, pepper and sugar etc.",
      }]
    },

    23: {
      controls: ["q9a"],
      question: [{
        hindi: "Q23. Cutlery (Stain-free, no marks, not broken/cracked)",
        english: "Q23. Cutlery (Stain-free, no marks, not broken/cracked)",
      }]
    },
    24:{
      controls: ["q9b"],
      question:[{
        hindi:"Q24. Food Tray (Free of foreign particles, dust- free, stain- free, not broken/cracked)",
        english:"Q24. Food Tray (Free of foreign particles, dust- free, stain- free, not broken/cracked)"
      }]
    },
    25:{
      controls: ["q9c"],
      question:[{
        hindi:"Q25. Availability of Tissue/Napkins/Liquid soaps/ Sanitizer",
        english:"Q25. Availability of Tissue/Napkins/Liquid soaps/ Sanitizer",
      }]
    },
    26:{
      controls: ["q9d"],
      question:[{
        hindi:"Q26. Cleanliness of chairs, tables, floors, serving counters",
        english: "Q26. Cleanliness of chairs, tables, floors, serving counters",
      }]
    },
    27:{
      controls: ["q9e"],
      question:[{
        hindi:"Q27. Cleanliness of Washroom/ Hand sinks",
        english:"Q27. Cleanliness of Washroom/ Hand sinks"
      }]
    },
    28:{
      controls: ["q10a"],
      question:[{
        hindi:"Q28. Variety – Thali / Combos, North/ South Indian, Chinese, Continental, Snacks,Dessert, Beverages",
        english:"Q28. Variety – Thali / Combos, North/ South Indian, Chinese, Continental, Snacks,Dessert, Beverages",
      }]
    },
    29:{
      controls: ["q10b"],
      question:[{
        hindi: "Q29. Choice of Only Roti/Rice/Chowmein - Thali/ Meal combos",
        english: "Q29. Choice of Only Roti/Rice/Chowmein - Thali/ Meal combos",
      }]
    },
    30:{
      controls: ["q11a"],
      question:[{
        hindi: "Q30. Polite",
        english: "Q30. Polite",
      }]
    },
    31:{
      controls: ["q11b"],
      question:[{
        hindi: "Q31. Responsiveness",
        english: "Q31. Responsiveness",
      }]
    },
    32:{
      controls: ["q11c"],
      question:[{
        hindi: "Q32. Staff Appearance",
        english: "Q32. Staff Appearance",
      }]
    },
    33:{
      controls: ["q11d"],
      question:[{
        hindi:"Q33. Explained Menu/ Options",
        english:"Q33. Explained Menu/ Options"
      }]
    },
    34:{
      controls: ["q11e"],
      question:[{
        hindi: "Q34. Food Timely Given",
        english:"Q34.  Food Timely Given",
      }]
    },
    35:{
      controls: ["q11f"],
      question:[{
        hindi:"Q35. Met Extra Requests (Like extra wrapping layer, tissues)",
        english:"Q35. Met Extra Requests (Like extra wrapping layer, tissues)",
      }]
    },
    36:{
      controls: ["q12a"],
      question:[{
        hindi:"Q36.  Menu Card/Rate List",
        english:"Q36.  Menu Card/Rate List",
      }]
    },
    37:{
      controls: ["q12b"],
      question:[{
        hindi:"Q37. Complaint/Suggestion Book",
        english:"Q37. Complaint/Suggestion Book"
      }]
    },
    38:{
      controls: ["q12c"],
      question:[{
        hindi:"Q38. POS Machine",
        english:"Q38. POS Machine"
      }]
    },
    39:{
      controls: ["q12d"],
      question:[{
        hindi:"Q39. Issuance of bill",
        english:"Q39. Issuance of bill"
      }]
    },
    
    40:{
      controls: ["q13"],
      question:[{
        hindi:"Q40. Please tell us how much time it took for the Restaurant to serve your meal",
        english: "Q40. Please tell us how much time it took for the Restaurant to serve your meal",
      }]
    },
    41:{
      controls: ["q14"],
      question:[{
        hindi:"Q41. Please give us suggestions that you think could help us in improving the Quality of food and refreshment related services",
        english: "Q41. Please give us suggestions that you think could help us in improving the Quality of food and refreshment related services",
      }]
    },

    42: {
      controls: ["name", "contactNumber", "surveyorName", "date", "place"],
      question: []
    },
  }
  constructor(private modal: NzModalService, public submissionService: SubmissionService, public toastService: NzMessageService,
     //public auth: AuthService,
    ) {


    this.surveyForm.patchValue({
      interviewDateStart: new Date(),
    })
    this['applyValidations']()

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

    if(this.step == 7) {
      // check if q8 or q9
      if(formValue.q6 && formValue.q6! === 2) {
        nextStep = 8
      } else {
        nextStep = 9
      }
    }

    this.step = nextStep > this.MAX_STEP ? this.MAX_STEP : nextStep;
  }

  /**
   * Go to previous step
   */
  prevStep() {
    let prevStep = this.step > 0 ? this.step - 1 : 0
    const formValue = this.surveyForm.getRawValue()

    // BACK IN CASE OF QUESTION SKIP INSTRUCTIONS HERE
    if(this.step == 9) {
      // check if q8 or q7
      if(formValue.q6 && formValue.q6! === 2) {
        prevStep = 8
      } else {
        prevStep = 7
      }
    }

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
    return false
    // const stepMapControls = this.stepMap[this.step].controls
    // return stepMapControls.some((each: string) => this.personalInformationFormControls[each]!.invalid)
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
      this.apiCall(requestBody)
    }, err => {
      requestBody.latitude = 0
      requestBody.longitude = 0
      this.apiCall(requestBody)
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
  // get currentUserInfo() {
  //   return this.auth.currentUser.getValue()
  // }

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


