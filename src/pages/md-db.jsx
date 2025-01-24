import React from 'react';
import HD from '../elements/header/header';
import Flow from '../elements/flow/flow';
import List from '../elements/list/list';

const md_db = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='z-10'>
        <HD />
      </div>
      <div className='z-5 flex-grow overflow-auto'>
        <Flow />
      </div>
      <div className='z-10'>
        <List />
      </div>
    </div>
  );
};

export default md_db;
