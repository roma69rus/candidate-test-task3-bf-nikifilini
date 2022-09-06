import { Injectable } from '@nestjs/common'
import { CrmType, Order, OrdersFilter, RetailPagination } from './types'
import axios, { AxiosInstance } from 'axios'
import { ConcurrencyManager } from 'axios-concurrency'
import { serialize } from '../tools'
import { plainToClass, plainToInstance } from 'class-transformer'
import { OrderStatus } from 'src/graphql'

@Injectable()
export class RetailService {
  private readonly axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: `${process.env.RETAIL_URL}/api/v5`,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.RETAIL_KEY,
      },
    })

    this.axios.interceptors.request.use((config) => {
      // console.log(config.url)
      return config
    })
    this.axios.interceptors.response.use(
      (r) => {
        // console.log("Result:", r.data)
        return r
      },
      (r) => {
        // console.log("Error:", r.response.data)
        return r
      },
    )
  }

  async orders(filter?: OrdersFilter): Promise<[Order[], RetailPagination]> {
    const params = serialize(filter, '')
    console.log("params", params)
    const resp = await this.axios.get('/orders?' + params)
    console.log("resp", resp.data)

    if (!resp.data) throw new Error('RETAIL CRM ERROR')

    const orders = plainToInstance(Order, resp.data.orders as Array<any>)
    const pagination: RetailPagination = resp.data.pagination

    return [orders, pagination]
  }

  async findOrder(id: string): Promise<Order | null> {
    const resp = await this.axios.get('/orders?filter[ids][]=' + id)
    console.log("resp", resp.data)
    if (!resp.data) throw new Error('RETAIL CRM ERROR')
    const order = plainToClass(Order, resp.data.orders[0] as any)

    return order;
  }

  async orderStatuses(): Promise<CrmType[]> {
    const resp = await this.axios.get('/reference/statuses')
    if (!resp.data) throw new Error('RETAIL CRM ERROR')
    const statuses: CrmType[] = Object.values(resp.data.statuses)

    return statuses;
  }

  async productStatuses(): Promise<CrmType[]> {
    const resp = await this.axios.get('/reference/product-statuses')
    if (!resp.data) throw new Error('RETAIL CRM ERROR')
    const statuses: CrmType[] = Object.values(resp.data.productStatuses)

    return statuses;
  }

  async deliveryTypes(): Promise<CrmType[]> {
    const resp = await this.axios.get('/reference/delivery-types')
    console.log("resp", resp.data.deliveryTypes)
    if (!resp.data) throw new Error('RETAIL CRM ERROR')
    const types: CrmType[] = Object.values(resp.data.deliveryTypes)

    return types
  }
}
