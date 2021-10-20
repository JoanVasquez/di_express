import UserSI from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import BaseService from "./base.service";

export default class UserService extends BaseService<UserSI> {
  constructor(modelI?: UserModel) {
    super(modelI);
  }
}
