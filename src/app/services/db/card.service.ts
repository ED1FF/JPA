import { Injectable } from '@angular/core';
import mainDataSource from 'src/app/database/datasources/main';
import { Card } from 'src/app/database/entities';

@Injectable({
  providedIn: 'root',
})
export class CardDB {
  connection = mainDataSource.dataSource;
  cardRepository = this.connection.getRepository(Card);
  cards: any;

  constructor() {}

  async find(query = {}) {
    return this.cardRepository.find(query);
  }

  async create(card: Card) {
    this.cardRepository.save(card);
  }

  async delete(cardId: string) {
    this.cardRepository.delete(cardId);
  }
}
