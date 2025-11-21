import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

function CardBody({ name, description = "", price }){
    const isDescription = () => {
        if(description !== ""){
            return true
        }else{
            return false
        }
    }
    return (
        <>
            <Text variant="h5">{name}</Text>
            {isDescription() ? <Text variant="p">{description}</Text> : null}
            <Text variant="span" className="text-muted">
                ${price}
            </Text>
        </>
    );
}

export default CardBody;