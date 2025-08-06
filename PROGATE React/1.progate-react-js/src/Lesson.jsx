import React, { useState } from 'react';

function Lesson({ name, introduction, image }) { // function Lesson menerapkan Destructuring Props
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='lesson-card'>
      <div className='lesson-item' onClick={() => setIsModalOpen(true)}>
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
      
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{name}</h2>
              <p>{introduction}</p>
            </div>
            <button
              className='modal-close-btn'
              onClick={() => setIsModalOpen(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lesson;