import React, { useState, useEffect } from "react";
import OrderTable from "../tables/OrderTable";

import { GetOrderInformation } from "../hooks";

const OrderPanel = () => {
    const [data, loading] = GetOrderInformation(0);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        if(data) {
            const formattedOrders = data.map((obj, i) => {
                return {
                    id: obj.orderId,
                    orderStatus: obj.orderStatus,
                    restaurantNames: obj.restaurantNames,
                    driverFirstName: obj.driverFirstName,
                    total: obj.total
                };
            });
            setOrders(formattedOrders);
        }
    }, [data]);

    const [editing, setEditing] = useState(false);
    const [deactivating, setDeactivating] = useState(false);

    return (
        <div className="row">
            <div className="col-md-3">
                {deactivating ? (
                    <div>
                        <h2>Set Active</h2>
                    </div>
                ) : editing ? (
                    <div>
                        <h2>Edit Order</h2>
                    </div>
                ): (
                    <div>
                        <h2>Create Order</h2>
                    </div>
                )}
            </div>
            {loading || !orders ? (
                <div className="col-md-9">
                    <p>Loading...</p>
                </div>
            ): (
                <div className="col-md-9">
                    <h2>View orders</h2>
                    <OrderTable
                        orders={orders}
                    />
                </div>
            )}
        </div>
    );
};

export default OrderPanel;