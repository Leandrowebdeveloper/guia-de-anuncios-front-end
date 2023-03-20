import { Attributes, InputName } from './../interface';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
/**
 * @class FormServices
 */
export class FormServices {
  private config: object;

  private passwordConfirmation = {
    validator: this.mustMatch('password', 'passwordConfirmation'),
  };

  private regexName =
    /^(?![ ])(?!.*(?:\d|[ ]{2}|[!$%^&*()_+|~=\{\}\[\]:";<>?,\/]))(?:(?:e|da|do|das|dos|de|d'|D'|la|las|el|los|l')\s*?|(?:[A-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'][^\s]*\s*?)(?!.*[ ]$))+$/;

  private regexFacebook =
    /(?:https?\:\/\/|www\.)(?:facebook)(?:.com\/)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*?$/i;

  private regexInstagran =
    /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im;

  private controls = {
    id: ['', [Validators.required]],
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.regexName),
      ],
    ],
    title: ['', [Validators.required, Validators.minLength(3)]],
    allotment: ['', [Validators.required]],
    block: ['', [Validators.required]],
    street: ['', [Validators.required]],
    type: ['', [Validators.required]],
    blockade: ['', [Validators.required]],
    response: ['', [Validators.required]],
    period: [''],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    zip_code: ['', [Validators.required]],
    district: ['', [Validators.required]],
    numberr: ['', [Validators.required]],
    complement: [''],
    mobilePhone: ['', [Validators.required]],
    phone: [''],
    whatsapp: ['', [Validators.required]],
    facebook: [
      '',
      [Validators.required, Validators.pattern(this.regexFacebook)],
    ],
    instagran: [
      '',
      [Validators.required, Validators.pattern(this.regexInstagran)],
    ],
    city: ['', [Validators.required]],
    uf: ['GO', [Validators.required]],
    description: ['', [Validators.required]],
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.regexName),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.regexName),
      ],
    ],
    level: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        // Validators.pattern(
        //     /^(?=.*\d)(?=.*[$-/:-?{-~"^_@!#`\[\]])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        // ),
      ],
    ],
    passwordCurrent: ['', [Validators.required]],
    passwordConfirmation: [
      null,
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
    stayConnected: ['', [Validators.required]],
    terms: ['true', [Validators.required, Validators.pattern('true')]],
    _csrf: ['', [Validators.required]],
    slug: ['', [Validators.required]],
  };

  private get configs(): object {
    return this.config;
  }

  private set configs(configs: object) {
    this.config = configs;
  }

  public controlsConfig(configs: object) {
    this.configs = configs;
    return this.buildTheControllers();
  }

  public isPasswordConfirmation(configs: object) {
    const data = configs || {};
    return this.getObjectKeys(data).includes('passwordConfirmation')
      ? this.passwordConfirmation
      : {};
  }

  public buildInput(configs: object, inputName: InputName): Attributes[] {
    const KEYS = this.getObjectKeys(configs);
    const inputs = [];
    for (const key in inputName) {
      if (KEYS && KEYS.includes(key) && inputName[key] !== null) {
        inputs.push(inputName[key]);
      }
    }
    return inputs;
  }

  private buildTheControllers() {
    const controls: any = {};
    let count = 0;
    // eslint-disable-next-line guard-for-in
    for (const key in this.configs) {
      if (this.makeSureTheSettingsMatchTheControls(key)) {
        controls[key] = this.getKeyControls(key);
        controls[key][0] = this.getValuesConfiguration(count);
      }
      count++;
    }
    return this.cleanValue(controls);
  }

  private cleanValue(controls: any) {
    if (Object.keys(controls).includes('email')) {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      controls['email'][0] = null;
    }
    return controls;
  }

  private getValuesConfiguration(count: number): any {
    return this.getObjectValues(this.configs)[count];
  }

  private getKeyControls(key: string): any {
    return this.controls[key];
  }

  private makeSureTheSettingsMatchTheControls(key: string) {
    return (
      this.validObject(key) &&
      this.theKeyMustMatchTheController(key) &&
      this.theValueMustMatchTheControllerValue(key)
    );
  }

  private validObject(key: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.configs, key);
  }

  private theKeyMustMatchTheController(key: string): boolean {
    return this.getObjectKeys(this.controls).includes(key);
  }

  private theValueMustMatchTheControllerValue(key: string): boolean {
    return this.getObjectValues(this.configs).includes(this.configs[key]);
  }

  private getObjectKeys(object: object): string[] {
    return object && Object.keys(object);
  }

  private getObjectValues(object: object): string[] {
    return object && Object.values(object);
  }

  private mustMatch(
    controlName: string,
    matchingControlName: string
  ): (formGroup: FormGroup) => void {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      return this.resultOfTheCombination(control, matchingControl);
    };
  }

  private resultOfTheCombination(
    control: AbstractControl,
    matchingControl: AbstractControl
  ): void {
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}