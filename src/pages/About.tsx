import React from 'react'
import useRouter from '../hooks/useRouter';

export const About = () => {
  const { push } = useRouter();
  const clickHandler = () => push('/');

  return (
    <div className='container'>
      <div className='text'>about</div>
      <button onClick={clickHandler} className='btn'>go main</button>
    </div>
  )
};

