import { Component } from '@angular/core';
import { NgForm, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, AbstractControl }    from '@angular/forms';
import { Hero }   from './models/Hero';
@Component({
  selector: 'hero-form',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(_fb: FormBuilder) {
    this.myForm = _fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
  }
  onSubmit2(form: any): void {
    console.log('you submitted value:', form);
  }


  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  
  onSubmit(hero: Hero) {
    console.log("hero=> " + JSON.stringify(hero));
    this.submitted = true;
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  newHero() {
    this.model = new Hero(42, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}