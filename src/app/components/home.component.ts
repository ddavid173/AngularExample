import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LinksService, Links } from '../services/links.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  linkService: LinksService = inject(LinksService);
  title = 'AngularExample';
  linkData: Links = [];

  ngOnInit() {
    let links: any = localStorage.getItem('linkData') ?? [];
    if (links.length > 0) {
      this.linkData = JSON.parse(links);
    }
    this.linkService.getLinks().then((data: Links) => {
      if (data.length !== links.length) {
        this.linkData = data;
        localStorage.setItem('linkData', JSON.stringify(data));
      }
    })
  }

}
