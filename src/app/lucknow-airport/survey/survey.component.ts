import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd/modal";
import {SubmissionService} from "../../services/submission.service";
import {NO_WHITE_SPACES_ONLY} from "../../utils/common";
import {NzMessageService} from "ng-zorro-antd/message";
import {AuthService} from "../../services/auth/auth.service";
import {yesNoQuestions, gender, rateQuestion} from "../../utils/constants";

const STRING_EMPTY_VALIDATOR = [Validators.required, NO_WHITE_SPACES_ONLY]
const NUMBER_VALIDATOR = [Validators.required, Validators.min(0)]
const SINGLE_SELECT_VALIDATOR = [Validators.required]

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  step: number=0;
  MAX_STEP: number =24;
  language : 'english' | 'hindi' ='english'

  A1Hindi=[
    "Business / Official / Conference", 
    "Social Purpose (Wedding/Function/Meeting Family/Friends/Home visit)",
    "Sight Seeing", "Tourism / Pilgrimage",
    "Others	(Medical Visit/Educational	Visit		etc. Please Specify "
  ]
  A1English=[
    "Business / Official / Conference", 
    "Social Purpose (Wedding/Function/Meeting Family/Friends/Home visit)",
    "Sight Seeing", "Tourism / Pilgrimage",
    "Others	(Medical Visit/Educational	Visit		etc. Please Specify "
  ]
  A1 = this.A1Hindi.map((each, index) => ({
    hindi: each, english: this.A1English[index]
  }))
  A2Hindi=[
    "1st AC",
    "AC 2 Tier",
    "AC 3 Tier",
    "EC (Executive Car)",
    "CC (Chair Car)",
    "Non AC – Chair Car",
    "Sleeper"
  ]
  A2English=[
    "1st AC",
    "AC 2 Tier",
    "AC 3 Tier",
    "EC (Executive Car)",
    "CC (Chair Car)",
    "Non AC – Chair Car",
    "Sleeper"
  ]

  A2 = this.A2Hindi.map((each, index) => ({
    hindi: each, english: this.A2English[index]
  }))
  A3Hindi=[
    "Vegetarian",
    "Satvik/Jain",
    "Vegan",
    "Non-vegetarian (eggs and all types of meat)",
    "Eggetarian (Vegetarian but eat egg & egg products)"
  ]
  A3English=[
    "Vegetarian",
    "Satvik/Jain",
    "Vegan",
    "Non-vegetarian (eggs and all types of meat)",
    "Eggetarian (Vegetarian but eat egg & egg products)"
  ]
  A3 = this.A3Hindi.map((each, index) => ({
    hindi: each, english: this.A3English[index]
  }))
  A4Hindi=[
    "18 - 25 years",
    "26 - 40 years",
    "41 - 60 years",
    "61 or more years"
  ]
  A4English=[
    "18 - 25 years",
    "26 - 40 years",
    "41 - 60 years",
    "61 or more years"
  ]
  A4 = this.A4Hindi.map((each, index) => ({
    hindi: each, english: this.A4English[index]
  }))
  gender1=gender;
  rateQuestion=rateQuestion;
  
  q7Hindi=[
    "Male",
    "Female",
    "Transgender"
  ]
  q7English=[
    "Male",
    "Female",
    "Transgender"
  ]
  q7 = this.q7Hindi.map((each, index) => ({
    hindi: each, english: this.q7English[index]
  }))
  //next
  a1Hindi=[
    "Have arrived after Train journey",
    "Will undertake Train journey after visit",
    "Came here while  waiting to receive relative/friend/colleague",
    "Came here for eating purpose"
  ]
  a1English=[
    "Have arrived after Train journey",
    "Will undertake Train journey after visit",
    "Came here while  waiting to receive relative/friend/colleague",
    "Came here for eating purpose"
  ]
  a1 = this.a1Hindi.map((each, index) => ({
    hindi: each, english: this.a1English[index]
  }))
  a2Hindi=[
    "Vegetarian",
    "Satvik/Jain",
    "Vegan",
    "Non-vegetarian (eggs and all types of meat)",
    "Eggetarian (Vegetarian but eat egg & egg products)"
  ]
  a2English=[
    "Vegetarian",
    "Satvik/Jain",
    "Vegan",
    "Non-vegetarian (eggs and all types of meat)",
    "Eggetarian (Vegetarian but eat egg & egg products)"
  ]
  a2 = this.a2Hindi.map((each, index) => ({
    hindi: each, english: this.a2English[index]
  }))
  a3Hindi=[
    "18 - 25 years",
    "26 - 40 years",
    "41 - 60 years",
    "61 or more years"
  ]
  a3English=[
    "18 - 25 years",
    "26 - 40 years",
    "41 - 60 years",
    "61 or more years"
  ]
  a3 = this.a3Hindi.map((each, index) => ({
    hindi: each, english: this.a3English[index]
  }))
  gender2=gender
  q12Hindi=[
    "Male",
    "Female",
    "Transgender"
  ]
  q12English=[
    "Male",
    "Female",
    "Transgender"
  ]
  q12 = this.q12Hindi.map((each, index) => ({
    hindi: each, english: this.q12English[index]
  }))
  // q13Hindi=[
  //   "Excellent",
  //   "Very Good",
  //   "Good",
  //   "Average",
  //   "Bad",
  //   "Not applicable"
  // ]
  surveySubmitStarted = false;
  surveyForm = new FormGroup<any>({
    name: new FormControl(null, STRING_EMPTY_VALIDATOR),
    contactNumber: new FormControl(null, STRING_EMPTY_VALIDATOR),

    // email validator.email  null


    A1: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    A2: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    A3: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    A4: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    A5: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    B1: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    B2: new FormControl<any>(null, NUMBER_VALIDATOR),

    B3: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    B4: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    B5: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    B6: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    B7: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    a1: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    a2: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    a3: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    a4: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    b1: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    b2: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    b3: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    b4: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    b5: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    b6: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    b7: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    interviewDateStart: new FormControl<any>(null),

  })
  stepMap: any = {
    0: {
      controls: []
    },

    1: {
      controls: ["A1"],
      question: [{
        hindi: "Q1. Purpose of Travel",
        english: "Q1. Purpose of Travel"
      }]
    },

    2: {
      controls: ["A2"],
      question: [{
        hindi: "Q2. Type	of	Compartment?",
        english: "Q2. Type	of	Compartment?"
      }]
    },

    3: {
      controls: ["A3"], question: [{
        hindi: "Q3. Please tell us if you are?",
        english: "Q3.Please tell us if you are?"
      }]
    },

    4: {
      controls: ["A4"],
      question: [{
        hindi: "Q4. Your	Present	Age?",
        english: "Q4Your	Present	Age?"
      }],
    },

    5: {
      controls: ["A5"],
      question: [{
        hindi: "Q5.  Record	Gender?",
        english: "Q5.Record	Gender?"
      }]
    },
    6: {
      controls: ["q6a"],
      question: [{
        hindi: 
          "q1 Overall Satisfaction with food and services on train",
      
        english: [
          "q1 Overall Satisfaction with food and services on train",
          "q2 Quality of food and beverages served on train",
          "q3 Quality of Packaging of the food & beverages served",
          "q4 Quantity of food and beverages served on train",
          "q5 Hygiene Level",
          "q6 Variety in Menu",
          "q7 Staff Behaviour",
          "q8 Value for Money"
      ]
      }]
    },
    7: {
      controls: ["B2"],
      question: [{
        hindi: [
          "q1 Food Preparation (Properly cooked)",
          "q2 Temperature - Food & Beverages (Hot/Cold/Normal)",
          "q3 Freshness of Food",
          "q4 Quality of Rail Neer, Packaged Drinking Water"
      ],
        english: [
          "q1 Food Preparation (Properly cooked)",
          "q2 Temperature - Food & Beverages (Hot/Cold/Normal)",
          "q3 Freshness of Food",
          "q4 Quality of Rail Neer, Packaged Drinking Water"
      ]
      }]
    },
    8: {
      controls: ["B3"],
      question: [{
        hindi: [
          "q1 Sufficient Quantity of meal - Thali / Combos, Snacks (Sandwiches, Pizza, Kachori, etc.), Dessert (Ice cream, Mithai, Kulfis, etc.)",
          "q2 Availability of Salt, pepper and sugar etc."
      ],
        english: [
          "q1 Sufficient Quantity of meal – Thali / Combos, Snacks (Sandwiches, Pizza, Kachori, etc.), Dessert (Ice cream, Mithai, Kulfis, etc.)",
          "q2 Availability of Salt, pepper and sugar etc."
      ]
      }]
    },
    9: {
      controls: ["B4"],
      question: [{
        hindi: [
          "q1 Brand",
          "q2 Expiry",
          "q3 Quality",
          "q4 Quantity",
          "q5 Overcharging"
      ],
        english: [
          "q1 Brand",
          "q2 Expiry",
          "q3 Quality",
          "q4 Quantity",
          "q5 Overcharging"
      ]
      }]
    },
    10: {
      controls: ["B5"],
      question: [{
        hindi: [
          "q1 Cutlery (Stain-free, no marks, not broken/cracked)",
          "q2 Food Tray (Free of foreign particles, dust-free, stain-free, not broken/cracked)",
          "q3 Availability of Tissue/Napkins/Sanitizer"
      ],
        english: [
          "q1 Cutlery (Stain-free, no marks, not broken/cracked)",
          "q2 Food Tray (Free of foreign particles, dust-free, stain-free, not broken/cracked)",
          "q3 Availability of Tissue/Napkins/Sanitizer"
      ]
      }]
    },
    11: {
      controls: ["B6"],
      question: [{
        hindi: ["Variety - Thali / Combos, North/ South Indian, Chinese, Continental, Snacks, Dessert, Beverages"],
        english: ["Variety - Thali / Combos, North/ South Indian, Chinese, Continental, Snacks, Dessert, Beverages"]
      }]
    },
    12: {
      controls: ["B7"],
      question: [{
        hindi:  [
          "q1 Menu Card/Rate List",
          "q2 Complaint/Suggestion Book",
          "q3 POS Machine",
          "q4 Issuance of bill"
      ],
        english:  [
          "q1 Menu Card/Rate List",
          "q2 Complaint/Suggestion Book",
          "q3 POS Machine",
          "q4 Issuance of bill"
      ]
      }]
    },
    13: {
      controls: ["a1"],
      question: [{
        hindi: "Q6. Purpose  of  Visit  to  Restaurant",
        english: "Q6. Purpose  of  Visit  to  Restaurant"
      }]
    },
    14: {
      controls: ["a2"],
      question: [{
        hindi: "Q6. Please	tell	us	if	you	are?",
        english: "Q6Please	tell	us	if	you	are?"
      }]
    },

    15: {
      controls: ["a3"],
      question: [{
        hindi: "Q7. Your	Present	Age?",
        english: "Q7. Your	Present	Age?"
      }]
    },

    16: {
      controls: ["a4"],
      question: [{
        hindi: "Q8. Record	Gender?",
        english: "Q8. Record	Gender?"
      }]
    },

    17: {
      controls: ["b1"],
      question: [{
        hindi: [
          "q1 Overall Satisfaction with food and services",
          "q2 Quality of Food and beverages served",
          "q3 Quality of Packaging of the food & beverages served",
          "q4 Quantity of food and beverages served",
          "q5 Hygiene Level",
          "q6 Variety in Menu",
          "q7 Staff Behaviour",
          "q8 Value for Money",
          "q9 Restaurant Temperature (Hot/Cold/Normal)",
          "q10 Sufficient number of chairs and tables",
          "q11 Quality of chairs"
      ],
        english: [
          "q1 Overall Satisfaction with food and services",
          "q2 Quality of Food and beverages served",
          "q3 Quality of Packaging of the food & beverages served",
          "q4 Quantity of food and beverages served",
          "q5 Hygiene Level",
          "q6 Variety in Menu",
          "q7 Staff Behaviour",
          "q8 Value for Money",
          "q9 Restaurant Temperature (Hot/Cold/Normal)",
          "q10 Sufficient number of chairs and tables",
          "q11 Quality of chairs"
      ]
      }]
    },

    18: {
      controls: ["b2"],
      question: [{
        hindi: [
          "q1 Food Preparation (Properly cooked)",
          "q2 Temperature – Food & Beverages (Hot/Cold/Normal)",
          "q3 Freshness of Food",
          "q4 Packaging Quality",
        ],
        english: [
          "q1 Food Preparation (Properly cooked)",
          "q2 Temperature – Food & Beverages (Hot/Cold/Normal)",
          "q3 Freshness of Food",
          "q4 Packaging Quality",
        ]
      }]
    },

    19: {
      controls: ["b3"],
      question: [{
        hindi:  [
          "q1 Sufficient Quantity of meal – Thali / Combos, Snacks (Sandwiches, Pizza, Kachori, etc.), Dessert (Ice cream, Mithai, Kulfis, etc.)",
          "q2 Availability of Salt, pepper and sugar etc."
      ],
        english:  [
          "q1 Sufficient Quantity of meal – Thali / Combos, Snacks (Sandwiches, Pizza, Kachori, etc.), Dessert (Ice cream, Mithai, Kulfis, etc.)",
          "q2 Availability of Salt, pepper and sugar etc."
      ]
      }]
    },

    20: {
      controls: ["b4"], question: [{
        hindi: [
          "q1 Cutlery (Stain-free, no marks, not broken/cracked)",
          "q2 Food Tray (Free of foreign particles, dust- free, stain- free, not broken/cracked)",
          "q3 Availability of Tissue/Napkins/Liquid soaps/ Sanitizer",
          "q4 Cleanliness of chairs, tables, floors, serving counters"
      ],
        english: [
          "q1 Cutlery (Stain-free, no marks, not broken/cracked)",
          "q2 Food Tray (Free of foreign particles, dust- free, stain- free, not broken/cracked)",
          "q3 Availability of Tissue/Napkins/Liquid soaps/ Sanitizer",
          "q4 Cleanliness of chairs, tables, floors, serving counters"
      ]
      }]
    },

    21: {
      controls: ["b5"], question: [{
        hindi: [
          "q1 Variety – Thali / Combos, North/ South Indian, Chinese, Continental, Snacks, Dessert, Beverages",
          "q2 Choice of Only Roti/Rice/Chowmein – Thali/ Meal combos"
      ],
        english: [
          "q1 Variety – Thali / Combos, North/ South Indian, Chinese, Continental, Snacks, Dessert, Beverages",
          "q2 Choice of Only Roti/Rice/Chowmein – Thali/ Meal combos"
      ]
      }]
    },

    22: {
      controls: ["b6"], question: [{
        hindi:  [
          "q1 Polite",
          "q2 Responsiveness",
          "q3 Staff Appearance",
          "q4 Explained Menu/Options",
          "q5 Food Timely Given",
          "q6 Met Extra Requests (Like extra wrapping layer, tissues)"
      ],
        english: [
          "q1 Polite",
          "q2 Responsiveness",
          "q3 Staff Appearance",
          "q4 Explained Menu/Options",
          "q5 Food Timely Given",
          "q6 Met Extra Requests (Like extra wrapping layer, tissues)"
      ]
      }]
    },

    23: {
      controls: ["b7"],
      question: [{
        hindi: [
          "q1 Menu Card/Rate List",
          "q2 Complaint/Suggestion Book",
          "q3 POS Machine",
          "q4 Issuance of bill"
      ],
        english: [
          "q1 Menu Card/Rate List",
          "q2 Complaint/Suggestion Book",
          "q3 POS Machine",
          "q4 Issuance of bill"
      ]
      }]
    },

    24: {
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
  // async nextStep() {
  //   const formValue = this.surveyForm.getRawValue()

  //   // FORM TERMINATION CONDITIONS

  //   // Q1
  //   if(formValue.q1 && formValue.q1! === 1) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q2
  //   if(formValue.q2 && [1,2,3,4,5,6].includes(formValue.q2!)) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q5
  //   if(formValue.q5 && formValue.q4 && (formValue.q4!.length < 7 || ![6, 7].includes(formValue.q5!))) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q7
  //   if(formValue.q7 && !(formValue.q7 <= 34 && formValue.q7! >= 18)) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q8
  //   if(formValue.q8 && [1,2,3,4,5].includes(formValue.q8!)) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q9
  //   if(formValue.q9 && [1,2,3,14,17].includes(formValue.q9!)) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q10
  //   if(formValue.q10 && [1,3].includes(formValue.q10!)) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q11 => 3,6,7 must be coded and at least 2 more products (at least 5)
  //   if(formValue.q11 && (!formValue.q11!.includes(3) || !formValue.q11!.includes(6) || !formValue.q11!.includes(7) || formValue.q11!.length < 5) ) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q12 => 3 must be coded and at least 4 more brands (at least 5)
  //   if( formValue.q12 && (!formValue.q12!.includes(3) || formValue.q12!.length < 5) ) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q13
  //   if( formValue.q13 && formValue.q13! === 1 ) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q14
  //   if( formValue.q14 && (formValue.q14! === 2 || formValue.q14! === 3)) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   // Q15
  //   if( formValue.q15 && formValue.q15! === 2) {
  //     this.openSurveyEndModal()
  //     return;
  //   }

  //   if (this.step + 1 > this.MAX_STEP) {
  //     // Submit
  //     await this.submitSurveyForm();
  //   } else {
  //     this.goToNextStep(formValue)
  //   }
  // }

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
