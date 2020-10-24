import React from 'react'

import style from '../recipie.module.css'

export default function Recipe({title,image,ingredient}) {
    return (
        <div className={style.recipie}>
            <h2>{title}</h2>
            <div className={style.details}>
            <ul>
            {ingredient.map(ing=>(
                <li>{ing.text}</li>
                ))}
                </ul>
            <img 
            src={image}
            />
            </div>
        </div>
    )
}
