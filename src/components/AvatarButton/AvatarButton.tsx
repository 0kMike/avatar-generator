import './AvatarButton.scss';

export interface AvatarButtonProps {
  direction: 'left' | 'right';
  clickHandler(): void;
}

export default function AvatarButton(props: AvatarButtonProps) {
  return (
    <button className='avatar-button' onClick={() => props.clickHandler()}>
      {props.direction === 'left' ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 19l-7-7 7-7'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      )}
    </button>
  );
}
