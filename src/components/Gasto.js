import React from 'react';

export const Gasto = ({gasto}) => {
    return (
        <li className="gastos">
            <p>{gasto.nombre} <span className="gasto">$ {gasto.cantidad}</span></p>
        </li>
    )
}
