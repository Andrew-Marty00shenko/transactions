import React, { useState } from 'react';
import './MainTable.scss'
import { Table } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import Filters from '../Filters/Filters'

const MainTable = ({ list }) => {
    const [filter, setFilter] = useState(list);
    const [activeBtn, setActiveBtn] = useState([]);

    const onCheckboxBtnClick = (selected) => {
        const index = activeBtn.indexOf(selected);
        if (index < 0) {
            activeBtn.push(selected);
        } else {
            activeBtn.splice(index, 1);
        }
        setActiveBtn([...activeBtn]);
    }

    const filterByIncome = () => {
        const currState = [...filter]
        const newState = currState.filter(type => type.type === "доход");
        const sortState = newState.sort((a, b) => b.value - a.value)
        setFilter(sortState);
        onCheckboxBtnClick(1);
    }

    const filterByConsuption = () => {
        const currState = [...filter];
        const newState = currState.filter(type => type.type === "расход");
        const sortState = newState.sort((a, b) => b.value - a.value);
        setFilter(sortState);
        onCheckboxBtnClick(2);
    }

    // const filterByDate = () => {
    //     const currState = [...filter];
    //     const newState = currState.filter(date => new Date().getDate(date.date) <= new Date().getDate() && date);
    //     setFilter(newState);
    //     onCheckboxBtnClick(3);
    // }

    const filterByValue = () => {
        const currState = [...filter];
        const newState = currState.filter(value => value.value > 1000);
        const sortState = newState.sort((a, b) => b.value - a.value);
        setFilter(sortState);
        onCheckboxBtnClick(3);
    }

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
                    <Filters list={filter} />
                </Table>
                <div className="main-table__buttons">
                    <ButtonGroup>
                        <Button
                            style={{ marginRight: 10 }}
                            color="secondary"
                            onClick={filterByIncome}
                            active={activeBtn.includes(1)}
                        >
                            Доход
                        </Button>
                        <Button
                            color="secondary"
                            onClick={filterByConsuption}
                            active={activeBtn.includes(2)}
                        >
                            Расход
                            </Button>
                        <Button
                            color="secondary"
                            onClick={filterByValue}
                            active={activeBtn.includes(3)}
                        >
                            Более 1000
                            </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default MainTable