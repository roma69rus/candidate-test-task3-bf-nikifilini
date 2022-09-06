import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RetailService } from './retail_api/retail.service'
import { GraphQLModule } from '@nestjs/graphql'
import { OrdersModule } from './orders/orders.module'
import { ReferenceModule } from './reference/reference.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
const { join } = require('path')

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
       },   
      
    }),
    OrdersModule,
    ReferenceModule,
  ],
  controllers: [AppController],
  providers: [AppService, RetailService],
})
export class AppModule {}