import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }

  onAddPost( form: NgForm) {

    if (form.invalid) {
      return;
    }

//      this.postsServ.addPost(form.value.title, form.value.content);
      form.resetForm();
    }

}
