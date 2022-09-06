import { makeAutoObservable } from "mobx";
import client from "~/api/gql";
import { SingleOrder } from "~/screens/Orders/Show/types";
import { ORDER_QUERY } from "./queries";

export default class OrdersShowStore {
  order: SingleOrder | null = null;
  id: string | null = null;
  initialized = false;
  loading = false;
  history: History;

  constructor() {
    makeAutoObservable(this);
  }

  setInitialized(val: boolean) {
    this.initialized = val;
  }


  setOrder(order: SingleOrder): void {
    this.order = order;
  }

  startLoading(): void {
    this.loading = true;
  }

  stopLoading(): void {
    this.loading = false;
  }

  async getOrder() {
    this.startLoading()
    if (this.order === null) {
      const url = window.location.pathname;
      var id:string = url.substring(url.lastIndexOf('/') + 1);

      console.log("id",id)

      const response = await client.query(ORDER_QUERY, {id}).toPromise()
      console.log("response", response.data)
      this.setOrder(response.data.order);
    }
    this.stopLoading()
    return this.order;
  }

  initialize() {
    
    // 
    if (this.initialized) return;
    this.initialized = true;
    this.getOrder();
  }


}
