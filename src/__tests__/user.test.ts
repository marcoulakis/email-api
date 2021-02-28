import request from "supertest";
import { app } from "../app";
import CreateConnection from "../database";

describe("users", async () => {
    beforeAll(async () => {
        const connection = await CreateConnection();
        await connection.runMigrations();
    });
    it("should be able to create a new user", async () => {
        const response = await request(app).post('/users').send({ 
            email: 'test@example.com',
            name: 'test',
        });
        expect(response.status).toBe(201);
    });

    it("should not be able to create user with same email", async () => {
        const response = await request(app).post('/users').send({ 
            email: 'test@example.com',
            name: 'test',
        });
        expect(response.status).toBe(400);
    });
});