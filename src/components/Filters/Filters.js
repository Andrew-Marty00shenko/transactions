import React from 'react';

const Filter = ({ list }) => {

    return (
        <>
            {list.map(item => {
                return <tbody key={item.id} className="main-table__text">
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.value}</td>
                        <td>{item.type}</td>
                        <td>{item.date}</td>
                    </tr>
                </tbody>
            })}
        </>
    )
}

export default Filter