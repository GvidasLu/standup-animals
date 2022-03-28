import React from "react";
import Animal from "../animal/Animal";
import {animals} from "../data/data";

const Animals = () => {

    return(
        <>
        {animals.map(el => (<Animal key={el.id} gyvunas={el.animal} url={el.img}/>) )}
        <Animal />
        </>
    )
}

export default Animals;