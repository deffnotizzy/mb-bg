import React from 'react';
import { Handle, Position } from '@xyflow/react';
import Icon from '../../../assets/build.png';

const CustomNode = ({ data }) => {
  return (
    <div className='flex flex-row bg-darkgrey border-1 border-yellow px-2 py-1 rounded-[10px] w-[400px] gap-3'>
      <section className='rounded-2xl w-2'>
        <img src={Icon} alt='Build.png' className='border-none rounded-[5px]'/>
      </section>
      <section className='flex flex-col'>
        <div className='text-white font-bold'>
          /ban vez
        </div>
        <div className='text-grey font-semibold text-xs'>
          <p> Drag and drop different <span className='text-purple'>options</span>, <span className='text-blue'>actions </span> 
          and <span className='text-green'> conditions</span> to add them to your command. Connect the corresponding colors to create your command.
          </p>
        </div>
      </section>
      <Handle 
        type="target" 
        position={Position.Top} 
        style={{ backgroundColor: '#6f42c1', borderRadius: '50%', width: '10px', height: '10px' }} 
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
