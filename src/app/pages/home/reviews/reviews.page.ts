import { Component, OnInit } from '@angular/core';
import { CardDB } from 'src/app/services/db/card.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  cards: any;

  constructor(private cardDB: CardDB) {}

  ngOnInit() {
    this.fetchCards();
  }

  async fetchCards() {
    this.cards = await this.cardDB.find();
  }
}
