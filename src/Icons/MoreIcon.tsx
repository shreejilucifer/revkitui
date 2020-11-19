import * as React from 'react'

export const More = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      data-name='Icon/More'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 30 30'
    >
      <defs>
        <clipPath id='prefix__more'>
          <path
            d='M0 16a2 2 0 112 2 2 2 0 01-2-2zm0-7a2 2 0 112 2 2 2 0 01-2-2zm0-7a2 2 0 112 2 2 2 0 01-2-2z'
            transform='translate(13 6)'
          />
        </clipPath>
      </defs>
      <g data-name='Icon/More'>
        <path d='M0 0h30v30H0z' fill='none' />
        <path
          data-name='Mask'
          d='M13 22a2 2 0 112 2 2 2 0 01-2-2zm0-7a2 2 0 112 2 2 2 0 01-2-2zm0-7a2 2 0 112 2 2 2 0 01-2-2z'
        />
        <g data-name='Icon/More' clipPath='url(#prefix__more)'>
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
