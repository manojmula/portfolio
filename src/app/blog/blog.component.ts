import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface BlogPost {
  id: string;
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
    {id: 'schoolAhead', title: 'School Ahead of its time.', date: new Date(2022, 4, 15)},
    // {id: 'riceBowlOfKarnataka', title: 'My Second Blog Post', date: new Date(2022, 5, 1)},
    // {id: 'BVBCollege', title: 'My Second Blog Post', date: new Date(2022, 5, 1)},
  ];

  postsProgramming : BlogPost[] = [
    {id: 'whyMathInProgramming', title: 'Mathematics for programmers', date: new Date(2022, 4, 15)},
    {id: 'ERPApplication', title: 'What makes application an ERP', date: new Date(2022, 5, 1)},
    // {id: 'podcastsThatInterestsMe', title: 'My Second Blog Post', date: new Date(2022, 5, 1)},
    {id: 'resourceOfSelfLearning', title: 'Resources for Self Learning', date: new Date(2022, 5, 1)},
    {id: 'areNewsLettersRelevant', title: 'Are Newsletters still relevant?', date: new Date(2022, 5, 1)},
    {id: 'isEuntrprunershipForEveryOne', title: 'Is euntrprunership is for everyone?', date: new Date(2022, 5, 1)},
    {id: 'sequelizeOptionalParameters', title: 'Optional Parameters in Sequelize', date: new Date(2022, 5, 1)},

  ];

  constructor(private router: Router) { }

  navigateToPost(id: string, category : string) {
    this.router.navigate(['/read-blog', id, category]);  
  }


  
}
