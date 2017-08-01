import { Component } from '@angular/core';
import { Movie } from './movie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private memento: Movie;

  constructor(){
    this.memento = new Movie("Title", 2015);
    let movieTmp = this.memento.clone();
    this.memento.setTitle("Another Title");
    //Prints Another title
    console.log(this.memento.getTitle());
    this.memento.restore(movieTmp);
    //Prints Title
    console.log(this.memento.getTitle());
  }
}
