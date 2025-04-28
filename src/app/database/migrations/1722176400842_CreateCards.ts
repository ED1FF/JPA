import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCards1722176400842 implements MigrationInterface {
  name = 'CreateCards1722176400842';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cards" ("id" varchar NOT NULL, "front" varchar NOT NULL)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cards"`);
  }
}
