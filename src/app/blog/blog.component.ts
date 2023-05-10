import { Component } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  date: Date;
  content: string;
}



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  posts: BlogPost[] = [
    {id: 1, title: 'My First Blog Post', date: new Date(2022, 4, 15), content: '<p>This is my first blog post. Thanks for reading!</p>'},
    {id: 2, title: 'My Second Blog Post', date: new Date(2022, 5, 1), content: '<p>This is my second blog post. Hope you enjoy it!</p>'},
    // Add more blog posts as needed
  ];


  
}
