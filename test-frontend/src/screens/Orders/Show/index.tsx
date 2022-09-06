import React, { useEffect } from "react";
import OrdersShowStore from "./store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import styles from "./styles.m.styl";
import Item from "./components/Item";
import { SingleOrder, SingleOrderItem } from "./types";
import { map } from "lodash";
import OrderStatus from "~/components/OrderStatus";
import DeliveryType from "~/components/DeliveryType";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersShowStore());

    useEffect(() => {
      if (state.initialized) return;
      state.initialize();

      console.log(state.order)
    });

    return (
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          {state.loading && <span>Loading...</span>}
          {!state.loading && (
            <div className={styles.card}>
              <div className={styles.row}>
                <div className={styles.orderNumber}>{state?.order?.number}</div>
                <div title={state?.order?.delivery?.code}> 
                  <DeliveryType code={state?.order?.delivery?.code || ''} />
                </div>
                <div title={state?.order?.status}>
                  <OrderStatus code={state?.order?.status || ''} />
                </div>
              </div>
              <div className={styles.items}>
                {map(state.order?.items, (item: SingleOrderItem, index: number) => (
                  <Item item={item} key={index} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }
);

export default OrdersShow;
