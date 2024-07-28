// import { Injectable, signal, WritableSignal } from '@angular/core';
// import {
//   CapacitorSQLite,
//   SQLiteConnection,
//   SQLiteDBConnection,
// } from '@capacitor-community/sqlite';
// import { Card } from '../interfaces/card';
// import { Database } from '../enums/database';

// @Injectable({
//   providedIn: 'root',
// })
// export class DatabaseService {
//   private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
//   private db!: SQLiteDBConnection;
//   private cards: WritableSignal<Card[]> = signal<Card[]>([]);

//   constructor() {}

//   async initializePlugin() {
//     this.db = await this.sqlite.createConnection(
//       Database.Name,
//       false,
//       'no-encription',
//       1,
//       false
//     );

//     await this.db.open;
//     await this.db.execute(this.schema);
//   }

//   async loadCards() {
//     const cards = await this.db.query('SELECT * from cards;');
//     this.cards.set(cards.values || []);
//   }

//   async createCards(card: Card) {
//     let query = `INSER INTO CARDS`;
//   }

//   schema = `
//   CREATE TABLE cards (
//     id TEXT PRIMARY KEY,
//     front TEXT,
//   );
// `;

//   // schema = `
//   //   CREATE TABLE cards (
//   //     id TEXT PRIMARY KEY,
//   //     difficulty INTEGER,
//   //     due DATE,
//   //     elapsed_days INTEGER,
//   //     lapses INTEGER,
//   //     last_review DATE,
//   //     reps INTEGER,
//   //     scheduled_days INTEGER,
//   //     stability INTEGER,
//   //     state INTEGER
//   //   );
//   // `;
// }
