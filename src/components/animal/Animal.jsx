const Animal = ({ gyvunas, url }) => {
    function generateColor() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return `#${randomColor}`;
    }


    return(
        <figure>
            <img 
            src={url} 
            alt={`${gyvunas}-animal`} 
            style={{ width: "50%", height: "50%" }}/>

            <figcaption 
            style={{ backgroundColor: generateColor() }}>
                {gyvunas}
            </figcaption>
        </figure>
    );
};

export default Animal;