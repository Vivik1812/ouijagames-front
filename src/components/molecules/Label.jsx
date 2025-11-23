import { WiAlien } from "react-icons/wi";


function Label({categoria}){
    return(
        <div style={{height:"4rem", fontSize:"2rem"}} 
            className='w-100 bg-black text-white text-uppercase text-white align-content-center'>
            <WiAlien className='text-success' style={{fontSize:"5rem"}}/>{categoria}
        </div>
    );
}

export default Label;