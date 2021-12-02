import Card from "./Card"
import React from 'react'

const Cardlist = ({ news }) => {
    const cardArray = news.map((data, i) => {
        return <Card key={i} />
    })
    return (
        <div>
            
        </div>
    )
}

export default Cardlist
