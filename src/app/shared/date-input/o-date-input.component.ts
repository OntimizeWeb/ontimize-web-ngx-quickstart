import {
  Component,
  OnInit,
  Optional,
  Input,
  Inject,
  ElementRef,
  Injector,
  forwardRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import {
  DateAdapter,
  NativeDateAdapter,
  MdNativeDateModule,
  MdDatepickerModule,
  MdDatepicker,
  MdDateFormats,
  MdInput,
  MdDatepickerInput,
  MD_DATE_FORMATS,
  MdInputModule

} from '@angular/material';

import {
  OFormComponent,
  OFormDataComponent,
  InputConverter,
  OFormValue,
} from 'ontimize-web-ng2'

import { Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms/src/directives/validators';


import { MomentDateAdapter2 } from '../momentAdapter';
import * as moment from 'moment';


/*import {
  DEFAULT_OUTPUTS_O_TEXT_INPUT
} from '../text-input/o-text-input.component';*/
import {
  DEFAULT_OUTPUTS_O_TEXT_INPUT,
  DEFAULT_INPUTS_O_TEXT_INPUT
} from 'ontimize-web-ng2';


export const DEFAULT_OUTPUTS_O_DATE_INPUT = [
  ...DEFAULT_OUTPUTS_O_TEXT_INPUT,
  'oformat: format',
  'filterDate'

];

export const DEFAULT_INPUTS_O_DATE_INPUT = [
  ...DEFAULT_INPUTS_O_TEXT_INPUT,
  'oformat: format',
  'olocale: locale',
  'ostartView:startView',
  'ominDate:min',
  'omaxDate:max',
  'otouchUi:touchUi',
  'ostartAt:startAt',
  'filterDate'
];

import { mdDateFormatsFactory } from '../../mdDateFormatsFactory';




@Component({
  selector: 'o-date-input-2',
  templateUrl: './o-date-input.component.html',
  styles: ['./o-date-input.component.scss'],
  outputs: [
    ...DEFAULT_OUTPUTS_O_DATE_INPUT
  ],
  inputs: [
    ...DEFAULT_INPUTS_O_DATE_INPUT
  ], providers: [

    {
      provide: MD_DATE_FORMATS,
      useFactory: mdDateFormatsFactory,
      deps: [Injector]
    }

  ]
})
export class ODateInputComponent2 extends OFormDataComponent implements OnInit {

  @ViewChild(MdDatepicker)
  datepicker: MdDatepicker<Date>;

  @ViewChild(MdDatepickerInput)
  datepickerInput: MdDatepickerInput<Date>;


  @ViewChild('mdInput')
  protected mdInput: ElementRef;

  private momentDateAdapter: DateAdapter<MomentDateAdapter2>;

  oformat: string = "L";
  olocale: string;
  ominDate: string;
  omaxDate: string;
  ostartAt:string;
  ostartView: 'month' | 'year' ='month';
  otouchUi: boolean = false;

  filterDate: (date: null) => boolean;
 
  constructor(
    dateAdapter: DateAdapter<MomentDateAdapter2>,

    @Optional() @Inject(forwardRef(() => OFormComponent)) form: OFormComponent,
    elRef: ElementRef,
    injector: Injector) {

    super(form, elRef, injector);

    this.momentDateAdapter = dateAdapter;
    this._defaultSQLTypeKey = 'DATE';
    
  }



  ngOnInit() {
    this.initialize();
    
    if (this.olocale ) {
      this.momentDateAdapter.setLocale(this.olocale);
    }
    
    if (this.ominDate) {
      this.datepickerInput.min = new Date(this.ominDate);
    }

    if (this.omaxDate) {
      this.datepickerInput.max = new Date(this.omaxDate);
    }

    if (this.ostartView) {
      this.datepicker.startView = this.ostartView;
    }

    if (this.otouchUi) {
      this.datepicker.touchUi =this.otouchUi;
    }

    if (this.ostartAt) {
      this.datepicker.startAt =new Date(this.ostartAt);
    }

  }

  ngAfterViewInit() {
    const formats = this.injector.get(MD_DATE_FORMATS);
    if (this.oformat) {
      formats.display.dateInput = this.oformat;
      formats.parse.dateInput = this.oformat;
    }
    
  }
 

  ngOnDestroy() {
    this.destroy();
  }

  getValueAsDate():any{
    let value = this.getValue();
    console.log("get value "+value);
    if (typeof value!=="undefined") {
     
  
      if (typeof value == 'number') {
        this.ensureOFormValue(new Date(value));
        return new Date(value);       
      }
    
  }
  return value;
    
  
}

  getValue(): any {
    
    let timestampValue: any;
    if (this.value instanceof OFormValue) {

      if (this.value.value) {
        timestampValue = this.value.value;
      }
    }
    if (timestampValue) {
      return timestampValue;
    }
    return undefined;
  }


  resolveValidators(): ValidatorFn[] {
    let validators: ValidatorFn[] = super.resolveValidators();
    
    console.log("validators",validators);
    return validators;
  }


  open(){
    if(!this.isReadOnly){
   
      this.datepicker.open();
    }
  }

}



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { OSharedModule } from '../../../shared';
import { OSharedModule } from 'ontimize-web-ng2';


@NgModule({
  declarations: [ODateInputComponent2],
  imports: [MdNativeDateModule, MdDatepickerModule, CommonModule, OSharedModule],
  exports: [ODateInputComponent2],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter2 },
    // {
    //   provide: MD_DATE_FORMATS,
    //   useFactory: mdDateFormatsFactory,
    //   deps: [Injector]
    // }

    // { provide: MD_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS }
  ]
})

export class ODateInputModule2 {

}
