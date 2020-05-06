import React from 'react';
import TableRow from './TableRow';

function UserTable(props){
    return(
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <TableRow
                    list={props.list}
                    onLoad={props.onLoad}
                    onRemove={props.onRemove}
                /> 
            </tbody>
        </table>
    );
}

export default UserTable;