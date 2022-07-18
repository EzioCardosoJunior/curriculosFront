import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Array<Post>
  flag: boolean = false;
  flag2: boolean = false;
  constructor(private showservice: AuthService) { }

  ngOnInit(): void {
    this.showservice.show().subscribe(data => {this.posts = data["data"]})
  }


  ocultar() 
  {
    if(this.flag == false)
    {
      this.flag = true;
    } 
    else 
    {
      this.flag = false
    }
  }

  ocultarinfo() 
  {
    if(this.flag2 == false)
    {
      this.flag2 = true;
    } 
    else
     {
      this.flag2 = false
    }
  }
}
