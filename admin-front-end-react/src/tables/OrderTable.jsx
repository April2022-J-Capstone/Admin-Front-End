import React from 'react';

const OrderTable = (props) => {

    //let activeState = "";
    return (
        <table>
            <thead>
            <tr>
                <th>Order Status</th>
                <th>Restaurants</th>
                <th>Driver Name</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            { props.orders.length > 0 ? (
                props.orders.map(order => {
                    const {id, orderStatus, restaurantNames, driverFirstName, total} = order;
                    /*if(account_active == "true"){
                        activeState = "Deactivate"
                    } else {
                        activeState = "Activate";
                    }*/
                    return (
                        <tr key={id}>
                            <td>{orderStatus}</td>
                            <td>{restaurantNames}</td>
                            <td>{driverFirstName}</td>
                            <td>{total}</td>
                        </tr>
                    )
                })
            ) : (
                <tr>
                    <td colSpan={4}>No restaurants found</td>
                </tr>
            )
            }
            </tbody>
        </table>
    )
}

export default OrderTable;