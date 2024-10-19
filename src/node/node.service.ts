import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Node } from 'src/schema/node.schema';

@Injectable()
export class NodeService {
  constructor(@InjectModel('Node') private readonly nodeModel: Model<Node>) {}

  getNodes = async (): Promise<Node[]> => {
    try {
      const data = await this.nodeModel
        .find()
        .populate({ path: 'trigger', populate: { path: 'resourceTemplateId' } })
        .populate('responses')
        .populate('actions')
        .lean()
        .exec();
      return data;
    } catch (error) {
      return error;
    }
  };

  getNode = async (id: string): Promise<Node> => {
    try {
      const data = await this.nodeModel
        .findById(id)
        .populate({ path: 'trigger', populate: { path: 'resourceTemplateId' } })
        .populate('responses')
        .populate('actions')
        .lean()
        .exec();
      return data;
    } catch (error) {
      return error;
    }
  };
}
