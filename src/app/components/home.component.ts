import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'AngularExample';
  linkData: any

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('data/linkData.json').subscribe(data => {
      this.linkData = data
    });

    // const listOfPills = document.querySelectorAll('.pill');

    // setInterval(() => {
    //   listOfPills.forEach((pill) => {
    //     pill.classList.remove('active');
    //   });
      
  }
}
