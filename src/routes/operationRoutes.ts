import { Request, Response, NextFunction } from "express";
//import { ContactController } from "../controllers/crmController";

export class Routes {

    //public contactController: ContactController = new ContactController() 

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Success!'
                })
            })

        //GET - Addition
        app.route('/add')
            .get((req: Request, res: Response) => {
                try {
                    const num1 = +req.query.num1;
                    const num2 = +req.query.num2;
                    res.status(200).send({ result: num1 + num2 });
                }
                catch (error) {
                    res.send({
                        message: error
                    })
                }
            });
        //GET - Subtraction
        app.route('/subtract')
            .get((req: Request, res: Response) => {
                try {
                    const num1 = +req.query.num1;
                    const num2 = +req.query.num2;
                    res.status(200).send({ result: num1 - num2 });
                }
                catch (error) {
                    res.send({
                        message: error
                    })
                }
            });
        //GET - Multiplication
        app.route('/multiply')
            .get((req: Request, res: Response) => {
                try {
                    const num1 = +req.query.num1;
                    const num2 = +req.query.num2;
                    res.status(200).send({ result: num1 - num2 });
                }
                catch (error) {
                    res.send({
                        message: error
                    })
                }
            });
          //GET - Division
          app.route('/divide')
          .get((req: Request, res: Response) => {
              try {
                  const num1 = +req.query.num1;
                  const num2 = +req.query.num2;
                  res.status(200).send({ result: num1 / num2 });
              }
              catch (error) {
                  res.send({
                      message: error
                  })
              }
          });
    }

}