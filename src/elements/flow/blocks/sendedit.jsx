import React from 'react';
import { Handle, Position } from '@xyflow/react';
import Icon from '../../../assets/blockicons/send-edit.png';

const CustomNode = ({ data }) => {
  return (
    <div className='flex flex-row bg-darkgrey border-1 border-blue px-2 py-1 rounded-[10px] w-[300px] gap-3'>
      <section className='rounded-2xl w-2'>
        <img src={Icon} alt='Build.png' className='border-none rounded-[5px]'/>
      </section>
      <section className='flex flex-col'>
        <div className='text-white font-bold'>
          Send or Edit a Message
        </div>
        <div className='text-lightgrey font-semibold text-xs'>
          <p> Send or edit a message with optional buttons and select menus.</p>
        </div>
      </section>
      <Handle 
        type="target" 
        position={Position.Top} 
        style={{ backgroundColor: '#007bff', borderRadius: '50%', width: '10px', height: '10px' }} 
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        style={{ backgroundColor: '#007bff', borderRadius: '50%', width: '10px', height: '10px' }} 
      />
    </div>
  );
};

export default CustomNode;
