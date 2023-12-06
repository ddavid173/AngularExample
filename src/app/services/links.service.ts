import { Injectable } from '@angular/core';

export type Links = { title: String, link: String}[] | [];

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  url = 'https://localhost:4200/data/linkData.json'
  links: Links = [];
  constructor() { }

  async getLinks(): Promise<Links> {
    return await fetch('data/linkData.json').then(async data => {
      return await data.json();
    }).then(res => {
      return res ?? [];
    });
  }

}
