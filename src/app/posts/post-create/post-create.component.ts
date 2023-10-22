import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // property
  newPost='NO CONTENT';
  enteredValue='';

  // handler
  onAddPost() {
    // 2. [property] = *value*    or one way binding
    // this.newPost = 'The user\'s post';

    this.newPost = this.enteredValue;
  }

}
