import { Component, OnInit } from '@angular/core';
import mainDataSource from 'src/app/database/datasources/main';
import { Card } from 'src/app/database/entities';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  connection = mainDataSource.dataSource;
  cardRepository = this.connection.getRepository(Card);
  cards: any;

  constructor() {}

  ngOnInit() {
    this.fetchCards();
  }

  async fetchCards() {
    this.cards = await this.cardRepository.find();
  }

  async createCard() {
    let card = new Card();
    card.front = `Test ${Date.now()}`;
    await this.cardRepository.save(card);
  }
}
