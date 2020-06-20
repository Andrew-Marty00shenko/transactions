import React, { useState, useCallback, useMemo } from 'react';
import './MainTable.scss'
import { Table } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import Filters from '../Filters/Filters'

const items = [
    {
        type: "income",
        label: 'доход',
        filter: t => t.type === 'income'
    },
    {
        type: "consuption",
        label: 'расход',
        filter: t => t.type === 'consuption'
    },
    {
        type: "more1000",
        label: ' более 1000',
        filter: t => t.value > 1000
    },
    {
        type: "lastMonth",
        label: 'за последний месяц',
        filter: t => {
            const now = new Date();
            const date = new Date(t.date).getTime();
            const prevMonth = new Date().setMonth(now.getMonth() - 1);
            return date >= prevMonth && date <= now.getTime();
        }
    },
]

const MainTable = ({ list }) => {
    const [activeFilters, setActiveFilters] = useState([]);

    const handleClick = useCallback(e => {
        const value = e.target.name;
        setActiveFilters(prevFilters => {
            if (prevFilters.includes(value)) return prevFilters.filter(f => f !== value);
            return [value, ...prevFilters]
        })
    }, []);

    const filterTransactions = useMemo(() => {
        let initialList = list;
        activeFilters.forEach(filterType => {
            const activeFilter = items.find(f => f.type === filterType);

            if (activeFilter) {
                initialList = initialList.filter(activeFilter.filter);
            }
        })

        return initialList;
    }, [activeFilters, list]);

    return (
        <div className="main-table">
            <div className="main-table__buttons">
                <ButtonGroup>
                    {items.map(i => {
                        return <Button
                            key={i.type}
                            name={i.type}

                            onClick={handleClick}
                            active={activeFilters.includes(i.type)}
                        >
                            {i.label}
                        </Button>
                    })}
                </ButtonGroup>
            </div>
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
                    <Filters list={filterTransactions} />
                </Table>

            </div>
        </div>
    )
}

export default MainTable