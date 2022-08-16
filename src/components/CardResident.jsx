import React from 'react'
import useFetch from '../hooks/useFetch'

export const CardResident = ({url}) => {
    const resident = useFetch(url);
  return (
    <article className='card'>
        <header>
            <img src={resident?.image} alt={`Image of ${resident?.name}`} />
            {/* <div>
                <div className="circle"></div>
                <span>{resident?.status}</span>
            </div> */}
        </header>
        <div className='card-info'>
            <h3>{resident?.name}</h3>
            <ul>
                <li><span>Species: </span><br />{resident?.species}</li>
                <li><span>Origin: </span><br />{resident?.origin.name}</li>
                <li><span>Episodes where appeear: </span><br />{resident?.episode.length}</li>
            </ul>
        </div>
         
    </article>
  )
}
