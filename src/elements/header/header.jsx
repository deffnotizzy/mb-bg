import React from 'react';
import '../styles.css';
  import BG from '../../assets/bg-icon.png';
  import LV from './elements/md-lv';
  import MO from './elements/mb-dp';


const header = () => {
  return (
    <header className=' flex flex-row justify-between bg-darkgrey border-b-1 border-black px-4 py-2 center-all-y '>
      <section>
        <LV />
      </section>
      <section>
        <img src={ BG } alt='BotGhost.png' className=' w-[40px] ' /> 
      </section>
      <section>
        <MO />
      </section>
    </header>
  )
}

export default header
