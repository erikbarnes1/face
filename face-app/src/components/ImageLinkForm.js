import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures...give it a try!'}
            </p>

            <div>
                <div className='form pa4 br3 shadow-5'>
                <input className='f4 pa2 w-20 center' type='text' />
                <button className='w-10 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;