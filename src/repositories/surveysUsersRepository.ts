import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/surveyUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export {SurveysUsersRepository};