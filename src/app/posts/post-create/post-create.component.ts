import {Component, EventEmitter, Output} from '@angular/core';
import {PostModel} from "../post.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // property
  enteredTitle = '';
  enteredContent = '';

  // decorator ‘output’ to pass data from child to parent component
  @Output() postCreated = new EventEmitter<PostModel>();


  // receive form of type NgForm, which a lot of information from the form
  onAddPost(form : NgForm) {
    //prevent form submission
    if(form.invalid) {
      return;
    }

    const post : PostModel = {
      // give access to the value of form using these
      title: form.value.title,
      content: form.value.content,
    }
    this.postCreated.emit(post);
  }

}

