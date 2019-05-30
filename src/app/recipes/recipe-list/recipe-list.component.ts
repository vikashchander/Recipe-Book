import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes : Recipe[] =[
     new Recipe("A recipe", 'this is beauitful', 'https://cdn.pixabay.com/photo/2016/03/23/15/20/vegetables-1274953__340.jpg')
   ];
  constructor() { }

  ngOnInit() {
  }

}
