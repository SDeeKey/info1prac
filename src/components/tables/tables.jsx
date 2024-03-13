import React from 'react';
import './tables.scss'

const Tables = () => {
    return (
        <div className='table'>
            <div className="mainContentTable">
                <div className="table1">
                    <table className='firstTable'>
                        <tr>
                            <td >1</td>
                            <td>2</td>
                            <td rowSpan="2">3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td colspan="2">6</td>
                            <td>7</td>
                        </tr>
                    </table>
                </div>
                <div className="table2">
                    <table className="secondTable">
                        <tr >
                            <td id="td1" colSpan="3">1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>3</td>
                            <td rowSpan="3">4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td id="td9" colSpan="3">9</td>
                        </tr>
                    </table>
                </div>
                <div className="table3">
                    <table className="thirdTable">
                        <tr >
                            <td>1</td>
                            <td>2</td>
                            <td rowSpan="2">3</td>
                            <td rowSpan="3">8</td>
                            <td rowSpan="3">9</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td colSpan="2">6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td colSpan="3">10</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td colSpan="4">13</td>
                            <td>14</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Tables;