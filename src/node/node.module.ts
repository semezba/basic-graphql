import { Module } from '@nestjs/common';
import { NodeService } from './node.service';
import { NodeResolver } from './node.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { NodeSchema } from 'src/schema/node.schema';
import { TriggerSchema } from 'src/schema/trigger.schema';
import { ResponseSchema } from 'src/schema/response.schema';
import { ActionSchema } from 'src/schema/action.schema';
import { ResourceTemplateSchema } from 'src/schema/resource_template.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Node', schema: NodeSchema },
      { name: 'Trigger', schema: TriggerSchema },
      { name: 'Response', schema: ResponseSchema },
      { name: 'Action', schema: ActionSchema },
      { name: 'ResourceTemplate', schema: ResourceTemplateSchema },
    ]),
  ],
  providers: [NodeResolver, NodeService],
})
export class NodeModule {}
