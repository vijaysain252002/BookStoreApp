import React from 'react';
import { Link } from 'react-router-dom';
import list from '../../public/list.json';
import Card from './Card';
function Course() {
    return (
        <>
            <div className='max-w-screen container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        we're delighted to have you 
                         <span className='text-pink-500 hover:text-blue-500'>
                             Here !! :)
                        </span>
                    </h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eius necessitatibus praesentium cum pariatur voluptatem repudiandae modi corrupti, blanditiis exercitationem fuga eveniet, aut perferendis ex tempore, doloremque maxime accusamus. Neque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eius necessitatibus praesentium cum pariatur voluptatem repudiandae modi corrupti, blanditiis exercitationem fuga eveniet, aut perferendis ex tempore, doloremque maxime accusamus. Neque?</p>
                    <Link to='/'>
                    <button className='bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-blue-500 duration-400 mt-6'> Back </button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        list.map((item)=>(
                            <Card item={item} key={item.id}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course;