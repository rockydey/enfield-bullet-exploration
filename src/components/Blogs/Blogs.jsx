import React from 'react';
import './Blogs.css';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

const Blogs = () => {
    return (
        <div>
            <section className='mx-52 mb-8'>
                <div className='flex items-start mb-4'>
                    <ChevronDoubleRightIcon className='w-8 h-8 mr-2'></ChevronDoubleRightIcon>
                    <h3 className='text-2xl font-semibold'>What is Context API or, What is the purpose of Context API?</h3>
                </div>
                <div>
                    <p className='text-xl'><span className='font-semibold'>Answer :</span> Context API is a way to share data through the component tree to other component. Context API gives full freedom to share any kind of data like function, state, or, primitive data in the component tree without having to pass props down manually at every level. Context API is great when you are passing data that can be used in any component in your application. Context API as likes the equivalent of global variables for our React components.</p>
                </div>
            </section>
            <section className='mx-52 mb-8'>
                <div className='flex items-start mb-4'>
                    <ChevronDoubleRightIcon className='w-8 h-8 mr-2'></ChevronDoubleRightIcon>
                    <h3 className='text-2xl font-semibold'>What is a semantic tag?</h3>
                </div>
                <div>
                    <p className='text-xl'><span className='font-semibold'>Answer :</span> A semantic tag is an element with a meaning. A semantic element clearly describes its meaning to both the browser and the developer. For example, a paragraph tag indicates that the enclosed text is a paragraph. And, browser know how to display a paragraph enclosed with paragraph tag. Semantic tags are helpful for SEO. </p>
                </div>
            </section>
            <section className='mx-52 mb-8'>
                <div className='flex items-start mb-4'>
                    <ChevronDoubleRightIcon className='w-8 h-8 mr-2'></ChevronDoubleRightIcon>
                    <h3 className='text-2xl font-semibold'>What is the difference between inline, block and, inline-block?</h3>
                </div>
                <div>
                    <p className='text-xl'><span className='font-semibold'>Answer :</span>
                        <li className='ml-12'><span className='font-semibold'>Inline:</span> Inline elements don't start on a new line. Inline elements doesn't allow to set css property like height, width, margin and, padding. For example, span tag, img tag are inline elements.</li>
                        <li className='ml-12 my-3'><span className='font-semibold'>Inline-Block:</span> Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. We have to 'display:"inline-block"' css property to make inline elements too inline-block elements.</li>
                        <li className='ml-12'><span className='font-semibold'>Block:</span> Block elements can't add a line-break after the element. Block elements can contain other block elements and inline elements. Block elements take the full width of a website. Block elements accepts width, height, margin, padding etc. For example heading tag, paragraph tag etc. are block elements.</li>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blogs;