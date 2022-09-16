import React from "react";
import { Planet, OrbitCircle } from "./";

function PlanetContainer({ data, moons }) {
    console.log(data)

    return(
        <>
            <Planet {...data}/>
            <OrbitCircle distance={data.distance}/>
            {moons.map(moon => <Planet key={moon.id} {...moon.data} parent={data.id}/>)}
        </>
    )
}

export default PlanetContainer;


// {/* <Planet {...planet1} /> */}
// <Planet {...planet2} />
// <OrbitCircle distance={planet2.distance} />
// <Planet {...moon1} />
