import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>,
        @InjectModel(Profile.name) private profileModel: Model<Profile>,
    ){}

    async createEmployee(): Promise<Employee>{
        const profile = await new this.profileModel({
            age: 20,
            qualification: 'Masters'
        }).save();
        const employee = new this.employeeModel({
            name: 'Farzeen',
            profile: profile._id
        });
        return employee.save();
    }

    async findAll(): Promise<Employee[]> {
            return this.employeeModel.find().populate('profile').exec();
        }

}
