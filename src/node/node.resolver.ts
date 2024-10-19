import { Resolver, Query, Args } from '@nestjs/graphql';
import { NodeService } from './node.service';
import { Node } from 'src/schema/node.schema';
import { NodeArgs } from './dto/args/nodes.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver()
export class NodeResolver {
  constructor(private readonly nodeService: NodeService) {}

  @Query(() => [NodeArgs], { name: 'nodes' })
  @UseGuards(JwtAuthGuard)
  getNodes(): Promise<Node[]> {
    return this.nodeService.getNodes();
  }

  @Query(() => NodeArgs, { name: 'node' })
  @UseGuards(JwtAuthGuard)
  getNode(@Args('id', { type: () => String }) id: string): Promise<Node> {
    return this.nodeService.getNode(id);
  }
}
