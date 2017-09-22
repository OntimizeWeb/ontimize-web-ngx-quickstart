import { Injector } from '@angular/core';

// import {
//     Config,
//     AppConfig,
//     APP_CONFIG
// } from '../config/app-config';

export let MOMENT_DATE_DEFAULT_FORMATS: MdDateFormats = {
    parse: {
        dateInput: "L"
    },
    display: {
        dateInput: "L",
        monthYearLabel: 'Y',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM Y'
    }
};

import { MD_DATE_FORMATS, MdDateFormats } from '@angular/material';
import { ODateInputComponent2 } from './shared/date-input/o-date-input.component';


export class MdDateFormatsFactory {
    defaultFormats: MdDateFormats = MOMENT_DATE_DEFAULT_FORMATS;
    component: ODateInputComponent2;
    constructor(protected injector: Injector, protected oDateInput: ODateInputComponent2) {
        this.component = this.oDateInput;
    }

    public factory(): any {
        return !this.component ? this.defaultFormats : Object.assign({
            parse: {
                dateInput: this.component.oformat
            },
            display: {
                dateInput: this.component.oformat
            }
        }, this.defaultFormats);
    }
}

export function mdDateFormatsFactory(injector: Injector, oDateInput: ODateInputComponent2) {
    return new MdDateFormatsFactory(injector, oDateInput).factory();
}
