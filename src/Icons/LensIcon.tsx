import * as React from 'react'

export const Lens = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      data-name='Icon/Lens'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 30 30'
    >
      <defs>
        <clipPath id='prefix__lens'>
          <path
            d='M15.219 18.625l-3.79-4.738a7.519 7.519 0 111.548-1.267l3.8 4.756a1 1 0 11-1.561 1.249zM2 7.5A5.5 5.5 0 107.5 2 5.506 5.506 0 002 7.5z'
            transform='translate(6 5)'
          />
        </clipPath>
      </defs>
      <path data-name='Icon/Lens background' fill='none' d='M0 0h30v30H0z' />
      <g data-name='Icon/Lens'>
        <path d='M0 0h30v30H0z' fill='none' />
        <path
          data-name='Mask'
          d='M21.219 23.625l-3.79-4.738a7.519 7.519 0 111.548-1.267l3.8 4.756a1 1 0 11-1.561 1.249zM8 12.5A5.5 5.5 0 1013.5 7 5.506 5.506 0 008 12.5z'
        />
        <g data-name='Icon/Lens' clipPath='url(#prefix__lens)'>
          <path
            data-name='Icon/\uD83D\uDD8C Fill/Dark'
            d='M0 0h30v30H0z'
            fill={props.color}
          />
        </g>
      </g>
    </svg>
  )
}
