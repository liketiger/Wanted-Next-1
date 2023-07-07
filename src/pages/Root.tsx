import React from 'react'
import useRouter from '../hooks/useRouter';

export const Root = () => {
  const { push } = useRouter();
  const clickHandler = () => push('/about');

  return (
    <div className='container'>
      <div className='text'>root</div>
      <button onClick={clickHandler} className='btn'>about</button>
    </div>
  )
};

