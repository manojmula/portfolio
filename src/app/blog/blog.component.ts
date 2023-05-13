import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface BlogPost {
  id: string;
  content : '',
  title: string;
  date: Date;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  postsPersonal: BlogPost[] = [
    {id: 'schoolAhead', content :'', title: 'School Ahead of its time.', date: new Date(2022, 4, 15)},
    // {id: 'riceBowlOfKarnataka', title: 'My Second Blog Post', date: new Date(2022, 5, 1)},
    // {id: 'BVBCollege', title: 'My Second Blog Post', date: new Date(2022, 5, 1)},
  ];

  postsProgramming : BlogPost[] = [
    {id: 'whyMathInProgramming', content :'', title: 'Mathematics for programmers', date: new Date(2022, 4, 15)},
    {id: 'ERPApplication', content :'', title: 'What makes application an ERP', date: new Date(2022, 5, 1)},
    {id: 'ORMorQuery',content : '', title: 'Query or ORM: A Balanced Perspective', date: new Date(2022, 5, 1)},
    {id: 'resourceOfSelfLearning', content :'', title: 'Resources for Self Learning', date: new Date(2022, 5, 1)},
    {id: 'areNewsLettersRelevant', content :'', title: 'Are Newsletters still relevant?', date: new Date(2022, 5, 1)},
    {id: 'isEuntrprunershipForEveryOne', content :'', title: 'Is euntrprunership for everyone?', date: new Date(2022, 5, 1)},
    {id: 'sequelizeOptionalParameters', content :'', title: 'Optional Parameters in Sequelize', date: new Date(2022, 5, 1)},
    {id: 'affectOfAIOnDevelopment', content :'', title: 'How Developer role is going to change with AI?', date: new Date(2022, 5, 1)},

  ];

  constructor(private router: Router) { }

  navigateToPost(id: string, category : string) {
    this.router.navigate(['/read-blog', id, category]);  
  }


  
}
