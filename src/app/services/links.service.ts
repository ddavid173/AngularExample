import { Injectable } from '@angular/core';

export type Links = { title: String, link: String}[] | [];

@Injectable({
  providedIn: 'root'
})
export class LinksService {
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
