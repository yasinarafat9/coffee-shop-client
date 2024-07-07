import React from 'react';
import SectionTitleCurly from './SectionTitleCurly';
import ButtonCoffeeLg from './ButtonCoffeeLg';

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);
    }




    return (
        <div>
            <SectionTitleCurly
                title={"Add A New Coffee"}
                paragraph={"Coffee because adulting is just figuring it out as you go"}
            >
            </SectionTitleCurly>
            <form onSubmit={handleAddCoffee} >
                <div className='  text-left sm:w-[400px] md:w-[750px] m-auto'>
                    <div className='grid  md:grid-cols-2 m-auto'>
                        <div className='flex-row items-center text-left mb-5 mx-auto'>
                            <h4 className='font-semibold mb-1'>Name : </h4>
                            <input
                                className="input input-bordered w-[350px]"
                                placeholder="Type here"
                                type="text"
                                name='name'
                            />
                        </div>
                        <div className='flex-row items-center text-left mb-5 m-auto'>
                            <h4 className='font-semibold mb-1'>Avliable Quantity : </h4>
                            <input
                                className="input input-bordered w-[350px]"
                                placeholder="Type here"
                                type="text"
                                name='quantity'
                            />
                        </div>
                        <div className='flex-row items-center text-left mb-5 m-auto'>
                            <h4 className='font-semibold mb-1'>Supplier Name: </h4>
                            <input
                                className="input input-bordered w-[350px]"
                                placeholder="Type here"
                                type="text"
                                name='supplier'
                            />
                        </div>
                        <div className='flex-row items-center text-left mb-5 m-auto'>
                            <h4 className='font-semibold mb-1'>Taste : </h4>
                            <input
                                className="input input-bordered w-[350px]"
                                placeholder="Type here"
                                type="text"
                                name='taste'
                            />
                        </div>
                        <div className='flex-row items-center text-left mb-5 m-auto'>
                            <h4 className='font-semibold mb-1'>Category : </h4>
                            <input
                                className="input input-bordered w-[350px]"
                                placeholder="Type here"
                                type="text"
                                name='category'
                            />
                        </div>
                        <div className='flex-row items-center text-left mb-5 m-auto'>
                            <h4 className='font-semibold mb-1'>Details : </h4>
                            <input
                                className="input input-bordered w-[350px]"
                                placeholder="Type here"
                                type="text"
                                name='details'
                            />
                        </div>
                        <div className='flex-row items-center text-left mb-5 m-auto'>
                            <h4 className='font-semibold mb-1'>Photo Url : </h4>
                            <input
                                className="input input-bordered w-[350px]"
                                placeholder="Type here"
                                type="text"
                                name='photo'
                            />
                        </div>

                        <div className='flex-row items-center text-left mb-5 m-auto'>
                            <h4></h4>
                            <ButtonCoffeeLg
                                text={"Add Coffee"}
                                value='submit'
                            >

                            </ButtonCoffeeLg>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default AddCoffee;