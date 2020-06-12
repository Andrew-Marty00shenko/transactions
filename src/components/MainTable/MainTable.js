import React from 'react';
import './MainTable.scss'
import { Table } from 'reactstrap';

const MainTable = ({ list }) => {

    return (
        <div className="main-table">
            <div className="container">
                <Table dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Сумма транзакции</th>
                            <th>Доход или расход</th>
                            <th>Дата и время транзакции</th>
                        </tr>
                    </thead>
                    {list.map(item => {
                        return <tbody className="main-table__text">
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.value}</td>
                                <td>{item.type}</td>
                                <td>{item.date}</td>
                            </tr>
                        </tbody>
                    })}
                    {/* 
                    
                */}
                </Table>
            </div>
        </div>

    )
}

export default MainTable