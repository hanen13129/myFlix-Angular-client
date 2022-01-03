/**
 * SynopsisCardComponent view allows a user to visualize the synopsis of a movie in a dialog
 */
 import { Component, OnInit, Inject } from '@angular/core';
 import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 
 @Component({
   selector: 'app-description-card',
   templateUrl: './description-card.component.html',
   styleUrls: ['./description-card.component.scss']
 })
 export class DescriptionCardComponent implements OnInit {
   /**
    * All constructor items are documented as properties
    * @ignore
    */
 
    constructor(
     @Inject(MAT_DIALOG_DATA)
     public data: {
       title: string;
       description: string;
       releaseDate: any;
       rating: any;
     }
   ) {}
 
   ngOnInit(): void {}
  }