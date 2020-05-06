import React from 'react';

function TableRow(props) {
    return props.list.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => props.onLoad(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2" onClick={() => props.onRemove(user)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        );
    });
}

export default TableRow;