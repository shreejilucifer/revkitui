import * as React from 'react'

export const Check = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      data-name='Icon/Check'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 30 30'
    >
      <defs>
        <clipPath id='prefix__check'>
          <path
            d='M17.293.293a1 1 0 011.414 1.414l-12 12a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L6 11.586z'
            transform='translate(6 8)'
          />
        </clipPath>
      </defs>
      <path data-name='Icon/Check background' fill='none' d='M0 0h30v30H0z' />
      <g data-name='Icon/Check'>
        <path d='M0 0h30v30H0z' fill='none' />
        <path
          data-name='Mask'
          d='M23.293 8.293a1 1 0 011.414 1.414l-12 12a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 19.586z'
        />
        <g data-name='Icon/Check' clipPath='url(#prefix__check)'>
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
