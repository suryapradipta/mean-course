import {Component, EventEmitter, Output} from '@angular/core';

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
  @Output() postCreated = new EventEmitter();


  // handler
  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    }
    this.postCreated.emit(post);
  }

}
