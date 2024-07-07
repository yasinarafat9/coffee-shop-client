import React from 'react';

const SectionTitleCurly = ({title, paragraph}) => {
    return (
        <div className='w-72 text-center my-5 mx-auto'>
            <h2 style={{ fontFamily: 'Josefin Sans' }} className='text-center text-3xl font-bold  '>{title}</h2>
            {/* <h4 style={{fontFamily:"Margarine&family"}}>AA</h4> */}
            <p style={{fontFamily: 'Playwrite FR Moderne", cursive'}}>{paragraph}</p>
        </div>
    );
};

export default SectionTitleCurly;