/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-stepper',
    templateUrl: './stepper.template.html'
})

export class stepperComponent extends NBaseComponent implements OnInit {
isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
    constructor(private _formBuilder: FormBuilder) {
        super();
    }

    ngOnInit() {
         this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    }
}
