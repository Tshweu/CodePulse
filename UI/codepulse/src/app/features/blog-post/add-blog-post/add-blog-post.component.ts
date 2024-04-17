import { Component, OnDestroy } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog-post',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-blog-post.component.html',
  styleUrl: './add-blog-post.component.css'
})
export class AddBlogPostComponent implements OnDestroy{
  model : AddBlogPost;
  createBlogPostSubscription ?: Subscription ;

  constructor(private blogPostService: BlogPostService,private router: Router){
    this.model = {
      title : '',
      urlHandle: '',
      content : '',
      author : '',
      featuredImageUrl : '',
      isVisible : true,
      publishedDate: new Date(),
      shortDescription : ''
    }
  }

  onFormSubmit(): void{
    this.createBlogPostSubscription = this.blogPostService.createBlogPost(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
    })
  }

  ngOnDestroy(): void {
    this.createBlogPostSubscription?.unsubscribe();
  }
}
