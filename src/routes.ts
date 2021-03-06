import { Router } from "express";
import { AnswerController } from "./controllers/answerController";
import { NpsController } from "./controllers/npsController";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/surveysController";
import { UserController } from "./controllers/userController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();


router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);
router.post("/send", sendMailController.execute);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);




export { router };