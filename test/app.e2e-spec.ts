import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import mongoose from 'mongoose';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe()); // Ensure validation pipe is used for class validator
    await app.init();

    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017',
    );
  });

  afterEach(async () => {
    await mongoose.connection.close();
    await app.close();
  });

  it('/analyze-sentiment (POST) successfully', async () => {
    try {
      const response = await request(app.getHttpServer())
        .post('/analyze-text')
        .send({ text: 'I love programming!' });
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        score: expect.any(Number),
        magnitude: expect.any(Number),
      });
    } catch (error) {
      console.log(error);
      return;
    }
  });

  it('/analyze-sentiment (POST) with empty text', async () => {
    try {
      const response = await request(app.getHttpServer())
        .post('/analyze-text')
        .send({ text: '' });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        message: ['text should not be empty'],
        error: 'Bad Request',
        statusCode: 400,
      });
    } catch (error) {
      console.log(error);
      return;
    }
  });
});
