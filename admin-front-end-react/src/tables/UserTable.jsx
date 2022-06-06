import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    {/* <th>Id</th> */}
                    <th>userName</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, userName} = user;
                        return (
                            <tr key={id+1}>
                                {/* <td>{id+1}</td> */}
                                <td>{userName}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Deactivate</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default UserTable;