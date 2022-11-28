import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirective',
  templateUrl: './demodirective.component.html',
  styleUrls: ['./demodirective.component.css']
})
export class DemodirectiveComponent implements OnInit {
ifShow:boolean=false;
title:string="Top 3 Movies";
  movies:Movie[]=[
    { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
    { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
