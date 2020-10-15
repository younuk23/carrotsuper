import { Request, Response, Router } from "express";
import LoginService from "./login.service";

class LoginController {
  public path = "/login" as const;
  public router = Router();
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`, this.login);
  }

  login = async (req: Request, res: Response) => {
    const { mobile, name } = req.body;
    const user = await this.service.getUserData(mobile, name);
    if (!user) {
      return res.status(401).json({
        message: "this user is not exist",
      });
    }
    const token = this.service.getToken(user);
    return res.json({
      message: "SUCCESS",
      token,
    });
  };
}

export { LoginController };
