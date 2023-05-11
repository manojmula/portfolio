import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-read-blog',
  templateUrl: './read-blog.component.html',
  styleUrls: ['./read-blog.component.css']
})
export class ReadBlogComponent implements OnInit{

  postId: string | undefined | null;
  category : string | null | undefined;
  content: SafeHtml | undefined;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient, 
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.category = this.route.snapshot.paramMap.get('category');
  
      this.http.get(`assets/blogs/${this.category}/${this.postId}.html`  ,  { responseType : 'text' })
      .subscribe((htmlContent : string) => {
        this.content = this.sanitizer.bypassSecurityTrustHtml(htmlContent);
      })
  }

}
