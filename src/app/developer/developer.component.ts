import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

public developer = new Developer("Bina", "Loup", 26, "Male", "I'm a student developer", [
    new Skill ("HTML", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png", "https://www.w3.org/"),
    new Skill ("CSS", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", "http://css.mammouthland.net/plan-site-css-debutant.php")
  ])

constructor() { }

  ngOnInit() {
  }

}
