import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

function Button({ children,onClick, ...props }){
    return <BootstrapButton onClick={onClick} {...props}>{children}</BootstrapButton>
}

export default Button;