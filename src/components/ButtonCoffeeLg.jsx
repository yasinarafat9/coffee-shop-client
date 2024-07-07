import React from 'react';

const ButtonCoffeeLg = ({ text }) => {
    return (
        <>
            <button style={{ fontFamily: "Josefin Sans" }} className=' text-3xl w-[350px]  h-[48px] text-white rounded-lg bg-amber-800 hover:bg-amber-900 '>{text}</button>
        </>

    );
};

export default ButtonCoffeeLg;