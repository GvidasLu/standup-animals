import Animal from "../animal/Animal";
import {animals} from "../data/data";

const Animals = () => {
    return(
        <>
        {animals.map(eL => (<Animal key={eL.id} gyvunas={eL.animal} url={eL.img}/>) )}
        <Animal />
        </>
    )
}

export default Animals;