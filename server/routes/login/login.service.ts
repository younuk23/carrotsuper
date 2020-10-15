const { users } = require("../../models");
import JWT_SECRET_KEY from "../../config/jwt.config";
const jwt = require("jsonwebtoken");
import { IUser } from "./login.interface";

class LoginService {
  getUserData = async (
    phoneNumber: string,
    name: string
  ): Promise<IUser | undefined> => {
    try {
      const user = await users.findOne({
        attributes: ["id", "phone_number", "name"],
        where: { phone_number: phoneNumber, name },
      });
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  getToken = (user: IUser): string => {
    return jwt.sign({ userId: user.id }, JWT_SECRET_KEY);
  };
}

export default LoginService;
