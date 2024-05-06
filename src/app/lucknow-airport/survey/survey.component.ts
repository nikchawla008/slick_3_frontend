import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators,} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd/modal';
import {SubmissionService} from '../../services/submission.service';
import {FORM_STATE_MANAGEMENT, NO_WHITE_SPACES_ONLY,} from '../../utils/common';
import {NzMessageService} from 'ng-zorro-antd/message';
import {gender, rateQuestion} from '../../utils/constants';
import {AuthService} from '../../services/auth/auth.service';
import {ActivatedRoute} from '@angular/router';

const STRING_EMPTY_VALIDATOR = [Validators.required, NO_WHITE_SPACES_ONLY];
const NUMBER_VALIDATOR = [Validators.required, Validators.min(0)];
const SINGLE_SELECT_VALIDATOR = [Validators.required];

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  step: number = 0;
  MAX_STEP: number = 39;
  language: 'english' | 'hindi' = 'english';

  q1Hindi = [
    'Business / Official / Conference',
    'Social Purpose (Wedding/Function/Meeting Family/Friends/Home visit)',
    'Sight Seeing',
    'Tourism / Pilgrimage',
    'Others	(Medical Visit/Educational	Visit		etc. Please Specify ',
  ];
  q1English = [
    'Business / Official / Conference',
    'Social Purpose (Wedding/Function/Meeting Family/Friends/Home visit)',
    'Sight Seeing',
    'Tourism / Pilgrimage',
    'Others	(Medical Visit/Educational	Visit		etc. Please Specify ',
  ];
  q1 = this.q1Hindi.map((each, index) => ({
    hindi: each,
    english: this.q1English[index],
  }));
  q2Hindi = [
    '1st AC',
    'AC 2 Tier',
    'AC 3 Tier',
    'EC (Executive Car)',
    'CC (Chair Car)',
    'Non AC – Chair Car',
    'Sleeper',
  ];
  q2English = [
    '1st AC',
    'AC 2 Tier',
    'AC 3 Tier',
    'EC (Executive Car)',
    'CC (Chair Car)',
    'Non AC – Chair Car',
    'Sleeper',
  ];

  q2 = this.q2Hindi.map((each, index) => ({
    hindi: each,
    english: this.q2English[index],
  }));
  q3Hindi = [
    'Vegetarian',
    'Satvik/Jain',
    'Vegan',
    'Non-vegetarian (eggs and all types of meat)',
    'Eggetarian (Vegetarian but eat egg & egg products)',
  ];
  q3English = [
    'Vegetarian',
    'Satvik/Jain',
    'Vegan',
    'Non-vegetarian (eggs and all types of meat)',
    'Eggetarian (Vegetarian but eat egg & egg products)',
  ];
  q3 = this.q3Hindi.map((each, index) => ({
    hindi: each,
    english: this.q3English[index],
  }));
  q4Hindi = [
    '18 - 25 years',
    '26 - 40 years',
    '41 - 60 years',
    '61 or more years',
  ];
  q4English = [
    '18 - 25 years',
    '26 - 40 years',
    '41 - 60 years',
    '61 or more years',
  ];
  q4 = this.q4Hindi.map((each, index) => ({
    hindi: each,
    english: this.q4English[index],
  }));
  gender1 = gender;
  rateQuestion = rateQuestion;
  surveySubmitStarted = false;
  surveyForm = new FormGroup<any>({
    name: new FormControl(null, STRING_EMPTY_VALIDATOR),
    contactNumber: new FormControl(null, STRING_EMPTY_VALIDATOR),
    email: new FormControl(null, Validators.email),

    surveyorPNR: new FormControl(null),
    userPNR: new FormControl(null, STRING_EMPTY_VALIDATOR),

    seatNumber: new FormControl(null, STRING_EMPTY_VALIDATOR),
    coachNumber: new FormControl(null, STRING_EMPTY_VALIDATOR),
    trainId: new FormControl(null, STRING_EMPTY_VALIDATOR),

    q1: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q2: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q3: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q4: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q5: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6c: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6d: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6e: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6f: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6g: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q6h: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

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

    q10c: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q11: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12c: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12d: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q12e: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q13a: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q13b: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q13c: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q13d: new FormControl<any>(null, SINGLE_SELECT_VALIDATOR),

    q14: new FormControl<any>(null),

    interviewStartTime: new FormControl<any>(null),
  });
  stepMap: any = {
    0: {
      controls: [],
    },

    1: {
      controls: ['q1'],
      question: [
        {
          hindi: 'Q1. Purpose of Travel',
          english: 'Q1. Purpose of Travel',
        },
      ],
    },

    2: {
      controls: ['q2'],
      question: [
        {
          hindi: 'Q2. Type	of	Compartment?',
          english: 'Q2. Type	of	Compartment?',
        },
      ],
    },

    3: {
      controls: ['q3'],
      question: [
        {
          hindi: 'Q3. Please tell us if you are?',
          english: 'Q3.Please tell us if you are?',
        },
      ],
    },

    4: {
      controls: ['q4'],
      question: [
        {
          hindi: 'Q4. Your	Present	Age?',
          english: 'Q4Your	Present	Age?',
        },
      ],
    },

    5: {
      controls: ['q5'],
      question: [
        {
          hindi: 'Q5.  Record	Gender?',
          english: 'Q5.Record	Gender?',
        },
      ],
    },
    6: {
      controls: ['q6a'],
      question: [
        {
          hindi: 'Q6. Overall Satisfaction with food and services on train',
          english: 'Q6. Overall Satisfaction with food and services on train',
        },
      ],
    },
    7: {
      controls: ['q6b'],
      question: [
        {
          hindi: 'Q7. Quality of Food and beverages served on train',
          english: 'Q7. Quality of Food and beverages served on train',
        },
      ],
    },
    8: {
      controls: ['q6c'],
      question: [
        {
          hindi: 'Q8. Quality of Packaging of the food & beverages served',
          english: 'Q8. Quality of Packaging of the food & beverages served',
        },
      ],
    },
    9: {
      controls: ['q6d'],
      question: [
        {
          hindi: 'Q9. Quantity of food and beverages served on train',
          english: 'Q9. Quantity of food and beverages served on train',
        },
      ],
    },
    10: {
      controls: ['q6e'],
      question: [
        {
          hindi: 'Q10. Hygiene Level',
          english: 'Q10. Hygiene Level',
        },
      ],
    },
    11: {
      controls: ['q6f'],
      question: [
        {
          hindi: 'Q11. Variety in Menu',
          english: 'Q11. Variety in Menu',
        },
      ],
    },
    12: {
      controls: ['q6g'],
      question: [
        {
          hindi: 'Q12. Staff Behaviour',
          english: 'Q12. Staff Behaviour',
        },
      ],
    },
    13: {
      controls: ['q6h'],
      question: [
        {
          hindi: 'Q13. Value for Money',
          english: 'Q13. Value for Money',
        },
      ],
    },
    14: {
      controls: ['q7a'],
      question: [
        {
          hindi: 'Q14. Food Preparation (Properly cooked)',
          english: 'Q14. Food Preparation (Properly cooked)',
        },
      ],
    },

    15: {
      controls: ['q7b'],
      question: [
        {
          hindi: 'Q15. Temperature - Food & Beverages (Hot/Cold/Normal)',
          english: 'Q15. Temperature - Food & Beverages (Hot/Cold/Normal)',
        },
      ],
    },

    16: {
      controls: ['q7c'],
      question: [
        {
          hindi: 'Q16. Freshness of Food',
          english: 'Q16. Freshness of Food',
        },
      ],
    },

    17: {
      controls: ['q7d'],
      question: [
        {
          hindi: 'Q17. Quality of Rail Neer, Packaged Drinking Water',
          english: 'Q17. Quality of Rail Neer, Packaged Drinking Water',
        },
      ],
    },

    18: {
      controls: ['q8a'],
      question: [
        {
          hindi:
            'Q18. Sufficient Quantity of meal - Thali / Combos, Snacks (Sandwiches, Pizza, Kachori, etc.), Dessert (Ice cream, Mithai, Kulfis, etc.)',
          english:
            'Q18. Sufficient Quantity of meal - Thali / Combos, Snacks (Sandwiches, Pizza, Kachori, etc.), Dessert (Ice cream, Mithai, Kulfis, etc.)',
        },
      ],
    },

    19: {
      controls: ['q8b'],
      question: [
        {
          hindi: 'Q19. Availability of Salt, pepper and sugar etc.',
          english: 'Q19. Availability of Salt, pepper and sugar etc.',
        },
      ],
    },

    20: {
      controls: ['q9a'],
      question: [
        {
          hindi: 'Q20. Brand',
          english: 'Q20. Brand',
        },
      ],
    },

    21: {
      controls: ['q9b'],
      question: [
        {
          hindi: 'Q21. Expiry',
          english: 'Q21. Expiry',
        },
      ],
    },

    22: {
      controls: ['q9c'],
      question: [
        {
          hindi: 'Q22. Quality',
          english: 'Q22. Quality',
        },
      ],
    },

    23: {
      controls: ['q9d'],
      question: [
        {
          hindi: 'Q23. Quantity',
          english: 'Q23. Quantity',
        },
      ],
    },
    24: {
      controls: ['q9e'],
      question: [
        {
          hindi: 'Q24. Overcharging',
          english: 'Q24. Overcharging',
        },
      ],
    },
    25: {
      controls: ['q10a'],
      question: [
        {
          hindi: 'Q25. Cutlery (Stain-free, no marks, not broken/cracked)',
          english: 'Q25. Cutlery (Stain-free, no marks, not broken/cracked)',
        },
      ],
    },
    26: {
      controls: ['q10b'],
      question: [
        {
          hindi:
            'Q26. Food Tray (Free of foreign particles, dust-free, stain-free, not broken/cracked)',
          english:
            'Q26. Food Tray (Free of foreign particles, dust-free, stain-free, not broken/cracked)',
        },
      ],
    },
    27: {
      controls: ['q10c'],
      question: [
        {
          hindi: 'Q27. Availability of Tissue/Napkins/Sanitizer',
          english: 'Q27. Availability of Tissue/Napkins/Sanitizer',
        },
      ],
    },
    28: {
      controls: ['q11'],
      question: [
        {
          hindi:
            'Q28. Variety - Thali / Combos, North/ South Indian, Chinese, Continental, Snacks, Dessert, Beverages',
          english:
            'Q28. Variety - Thali / Combos, North/ South Indian, Chinese, Continental, Snacks, Dessert, Beverages',
        },
      ],
    },
    29: {
      controls: ['q12a'],
      question: [
        {
          hindi: 'Q29. Polite',
          english: 'Q29. Polite',
        },
      ],
    },
    30: {
      controls: ['q12b'],
      question: [
        {
          hindi: 'Q30. Responsiveness',
          english: 'Q30. Responsiveness',
        },
      ],
    },
    31: {
      controls: ['q12c'],
      question: [
        {
          hindi: 'Q31. Staff Apperance',
          english: 'Q31. Staff Apperance',
        },
      ],
    },
    32: {
      controls: ['q12d'],
      question: [
        {
          hindi: 'Q32. Explained Menu/Options',
          english: 'Q32. Explained Menu/Options',
        },
      ],
    },
    33: {
      controls: ['q12e'],
      question: [
        {
          hindi: 'Q33. Food timely given',
          english: 'Q33. Food timely given',
        },
      ],
    },
    34: {
      controls: ['q13a'],
      question: [
        {
          hindi: 'Q34. Menu Card/Rate List',
          english: 'Q34.  Menu Card/Rate List',
        },
      ],
    },
    35: {
      controls: ['q13b'],
      question: [
        {
          hindi: 'Q35. Complaint/Suggestion Book',
          english: 'Q35. Complaint/Suggestion Book',
        },
      ],
    },
    36: {
      controls: ['q13c'],
      question: [
        {
          hindi: 'Q36.  POS Machine',
          english: 'Q36.  POS Machine',
        },
      ],
    },
    37: {
      controls: ['q13d'],
      question: [
        {
          hindi: 'Q37. Issuance of bill',
          english: 'Q37. Issuance of bill',
        },
      ],
    },

    38: {
      controls: ['q14'],
      question: [
        {
          hindi:
            'Q38. Please give us a sugestion that you think could help us improving the quality of food and refreshment related services',
          english:
            'Q38. Please give us a sugestion that you think could help us improving the quality of food and refreshment related services',
        },
      ],
    },

    39: {
      controls: [
        'surveyorPNR',
        'userPNR', // PNRs
        'seatNumber',
        'coachNumber', // Seat details
        'trainId',
        'name',
        'contactNumber',
        'email',
      ],
      question: [],
    },
  };
  constructor(
    private modal: NzModalService,
    public submissionService: SubmissionService,
    public toastService: NzMessageService,
    public auth: AuthService,
    public activatedRoute: ActivatedRoute
  ) {
    this.surveyForm.patchValue({
      interviewStartTime: new Date(),
    });
    this.applyValidations();

    navigator.geolocation.getCurrentPosition(
      () => {},
      (err) => {
        if (err.code === 1) {
          this.toastService.error(
            'Please allow location permissions on this browser'
          );
        }
      }
    );
  }

  async ngOnInit() {
    const formState = FORM_STATE_MANAGEMENT.restoreFormState();
    if (formState) {
      this.surveyForm.patchValue(formState.formValues);
      this.step = formState.currentStep;
    }

    const currentQueryParams = this.activatedRoute.snapshot.queryParams;
    if (!!currentQueryParams['pnr']) {
      this.surveyForm.patchValue({
        surveyorPNR: currentQueryParams['pnr'],
      });
    }

    if (!!currentQueryParams['train_id']) {
      this.surveyForm.patchValue({
        trainId: currentQueryParams['train_id'],
      });
    }
  }

  /**
   * Go to next step
   */
  async nextStep() {
    const formValue = this.surveyForm.getRawValue();

    // FORM TERMINATION CONDITIONS
    if (this.step + 1 > this.MAX_STEP) {
      // Submit
      await this.submitSurveyForm();
    } else {
      this.goToNextStep(formValue);
    }

    FORM_STATE_MANAGEMENT.saveFormState(
      this.surveyForm.getRawValue(),
      this.step
    );
  }

  /**
   * Find next step according to question skipping logic
   * @param formValue
   */
  goToNextStep(formValue: any) {
    let nextStep = this.step + 1;

    // QUESTION SKIPPING STEPS HERE


    this.step = nextStep > this.MAX_STEP ? this.MAX_STEP : nextStep;
  }

  /**
   * Go to previous step
   */
  prevStep() {
    let prevStep = this.step > 0 ? this.step - 1 : 0;
    const formValue = this.surveyForm.getRawValue();

    // BACK IN CASE OF QUESTION SKIP INSTRUCTIONS HERE
    if (this.step == 9) {
      // check if q8 or q7
      if (formValue.q6 && formValue.q6! === 2) {
        prevStep = 8;
      } else {
        prevStep = 7;
      }
    }

    this.clearControl();
    this.step = prevStep;
  }

  /**
   * Reset form and go to step 1
   */
  async goToStep1() {
    this.step = 1;
    this.surveyForm.reset();
    this.surveyForm.patchValue({
      interviewStartTime: new Date(),
    });
  }

  /**
   * Getter for form controls
   */
  get personalInformationFormControls() {
    return this.surveyForm.controls;
  }

  /**
   * Disable next button
   */
  get disableNext() {
    const stepMapControls = this.stepMap[this.step].controls;
    return stepMapControls.some(
      (each: string) => this.personalInformationFormControls[each]!.invalid
    );
  }

  /**
   * Apply Validations
   */
  applyValidations() {}

  /**
   * Go back to step one after survey submission success modal closed
   */
  async closeSurveyEndModal() {
    await this.goToStep1();
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
    const formData = this.surveyForm.getRawValue();

    const requestBody: any = {
      ...formData,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        requestBody.latitude = position.coords.latitude;
        requestBody.longitude = position.coords.longitude;
        console.log(requestBody);
        this.apiCall(requestBody);
      },
      (err) => {
        requestBody.latitude = 0;
        requestBody.longitude = 0;
        this.apiCall(requestBody);
      }
    );
  }

  /**
   * Call api and submit survey
   * @param requestBody
   */
  apiCall(requestBody: any) {
    this.surveySubmitStarted = true;
    // console.log(requestBody);
    this.submissionService.submitForm(requestBody).subscribe({
      next: async () => {
        this.surveySubmitStarted = false;
        this.surveyEndedMessage();
        FORM_STATE_MANAGEMENT.clearFormState()
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
    const currentStep = this.step;
    if (this.stepMap[currentStep]) {
      this.stepMap[currentStep].controls.forEach((eachControl: string) => {
        this.surveyForm.get(eachControl)?.reset();
      });
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
    return control as FormControl;
  }

  /**
   * Change language of question
   */
  switchLanguage() {
    this.language = this.language === 'english' ? 'hindi' : 'english';
  }

  get isMobile() {
    return window.innerWidth <= 1200;
  }
}
