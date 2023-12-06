import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
