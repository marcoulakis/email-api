import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/surveysRepository";


class SurveysController{

    async create( request: Request, response: Response){
        const { tittle, description } = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);


        const survey = surveysRepository.create({
            tittle,
            description
        });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);
        
    }

    async show(request: Request, response: Response){
        
        const surveysRepository = getCustomRepository(SurveysRepository);

        const all = await surveysRepository.find();

        return response.json(all);
    }

}

export { SurveysController };