import React from 'react'

const cityApi = async(city) => {
    return await fetch (`https://api.zippopotam.us/in/${city}`)
    .then((res) => res.json())
    .then((json) => {
        return json
    }
    ) 
}

export default cityApi