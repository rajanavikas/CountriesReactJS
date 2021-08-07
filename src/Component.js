import React from 'react';

export default class DynamicTable extends React.Component {
    tableData = []
    constructor(props) {
        super(props);
        this.fetchData();

        this.state = {
            tableData: this.tableData,
        }
    }

    fetchData() {
        const apiUrl = 'https://restcountries.eu/rest/v2/region/Asia';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.tableData = data;
                this.setState({
                    tableData: this.tableData
                });
            });
    }

    handleClick() {
        this.fetchData();
    }

    renderRows() {
        return this.state.tableData.map(function (o, i) {
            var langs = "";
            for (let index = 0; index < o.languages.length; index++) {
                langs += o.languages[index].name;
                if (index !== o.languages.length - 1) {
                    langs += ", ";
                }
            }
            var borders = "";
            for (let index = 0; index < o.borders.length; index++) {
                borders += o.borders[index];
                if (index !== o.borders.length - 1) {
                    borders += ", ";
                }
            }
            return (
                <tr key={"item-" + i}>
                    <td>
                        {o.name}
                    </td>
                    <td>
                        {o.capital}
                    </td>
                    <td>
                        <img src={o.flag} width="60" height="35" />
                    </td>
                    <td>
                        {o.region}
                    </td>
                    <td>
                        {o.subregion}
                    </td>
                    <td>
                        {o.population}
                    </td>
                    <td>
                        {borders}
                    </td>
                    <td>
                        {langs}
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick.bind(this)}
                >
                    Refresh
                </button>
                <hr/>
                <table className="">
                    <thead>
                        <tr>
                            <th style={{
                                borderBottom: 'solid 3px blue',
                                background: 'green',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                                Name
                            </th>
                            <th style={{
                                borderBottom: 'solid 3px blue',
                                background: 'green',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                                Capital
                            </th>
                            <th style={{
                                borderBottom: 'solid 3px blue',
                                background: 'green',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                                Flag
                            </th>
                            <th style={{
                                borderBottom: 'solid 3px blue',
                                background: 'green',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                                Region
                            </th>
                            <th style={{
                                borderBottom: 'solid 3px blue',
                                background: 'green',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                                SubRegion
                            </th>
                            <th style={{
                                borderBottom: 'solid 3px blue',
                                background: 'green',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                                Population
                            </th>
                            <th style={{
                                borderBottom: 'solid 3px blue',
                                background: 'green',
                                color: 'white',
                                fontWeight: 'bold',
                            }} >
                                Borders
                            </th>
                            <th style={{
                                borderBottom: 'solid 3px blue',
                                background: 'green',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                                Languages
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <hr />
            </div>
        );
    }
}