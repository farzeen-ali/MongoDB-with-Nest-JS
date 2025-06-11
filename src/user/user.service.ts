import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async createUser(): Promise<User>{
        const user = new this.userModel({
            name: 'Farzeen Ali',
            address: {
                street: '123 Street',
                city: 'Karachi'
            }
        })
        return user.save();
    }

    async findAll(): Promise<User[]>{
        return this.userModel.find()
    }
}
