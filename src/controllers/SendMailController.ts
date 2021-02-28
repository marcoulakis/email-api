import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/surveysRepository";
import { SurveysUsersRepository } from "../repositories/surveysUsersRepository";
import { UsersRepository } from "../repositories/usersRepository";
import SendMailService from "../services/sendMailService";

class SendMailController {

        async execute(request: Request, response: Response){
            const { email, survey_id } = request.body;

            const usersRepository = getCustomRepository(UsersRepository);
            const surveysRepository = getCustomRepository(SurveysRepository);
            const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

            const userAlredyExists = await usersRepository.findOne({ email })

            if (!userAlredyExists){
                return response.status(400).json({
                    error: "User does not exists",
                });
            }

            const survey = await surveysRepository.findOne({id: survey_id});

            if (!survey){
                return response.status(400).json({
                    error: "Survey does not exists",
                });
            }

            const surveyUser = surveysUsersRepository.create({
                user_id: userAlredyExists.id,
                survey_id
            });

            await surveysUsersRepository.save(surveyUser);

            await SendMailService.execute(email, survey.tittle, survey.description);

            return response.status(200).json(surveyUser);
        }
}

export { SendMailController }