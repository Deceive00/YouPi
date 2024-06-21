import React from "react";

interface Props {
    name : string;
    value: number;
    onChange: (value: number) => void;
}

const RatingStars : React.FC<Props> = ({name, value, onChange}) => {
    const handleClick = (new_value: number) => {
        onChange(new_value);
    };

    return(
        <div className="rating rating-lg">
            <input onClick={() => handleClick(1)} type="radio" name={name} className="mask mask-star-2 bg-orange-400" />
            <input onClick={() => handleClick(2)} type="radio" name={name} className="mask mask-star-2 bg-orange-400" />
            <input onClick={() => handleClick(3)} type="radio" name={name} className="mask mask-star-2 bg-orange-400"/>
            <input onClick={() => handleClick(4)} type="radio" name={name} className="mask mask-star-2 bg-orange-400"/>
            <input onClick={() => handleClick(5)} type="radio" name={name} className="mask mask-star-2 bg-orange-400"/>
        </div>
    )
}

export default RatingStars 