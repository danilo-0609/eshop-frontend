import { AfterViewInit, Component, ContentChild, Inject, OnInit, Renderer2 } from '@angular/core';
import { LoginService } from './login.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})

export class LoginComponent implements OnInit {

  public emailErrorMessage : string;
  form!: FormGroup;

  constructor(private loginService: LoginService,
    private render : Renderer2,
    @Inject(DOCUMENT) private document : Document,
    private formBuilder : FormBuilder,
    private router : Router){}

  ngOnInit() : void {
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    };

    get f(){ return this.form.controls; }

  onSubmit() : void {

  }

  navigateToHomePage() : void {
    this.router.navigate(['/home']);
  }

}
