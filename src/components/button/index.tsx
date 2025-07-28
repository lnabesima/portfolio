'use client';

interface ButtonProps{
  label: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({label, type='button'}: ButtonProps) => {
  return <button type={type} className={'border border-red-500'} onClick={() => console.log('clicked!')}>{label}</button>
}