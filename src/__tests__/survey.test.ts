import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";
import CreateConnection from "../database";

describe("surveys", async () => {
    beforeAll(async () => {
        const connection = await CreateConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    })

    it("should be able to create a new survey", async () => {
        const response = await request(app).post('/surveys').send({ 
            tittle: "tittle example",
            description: "description example",
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("should be able get all surveys", async () => {
        await request(app).post('/surveys').send({ 
            tittle: "tittle example2",
            description: "description example2",
        });


        const response = await request(app).get('/surveys');
         
        expect(response.body.length).toBe(2);
    })
});