import * as React from 'react'

export const ChevronBottom = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      data-name='Icon/Chevron Bottom'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 30 30'
    >
      <defs>
        <clipPath id='prefix__chevronbottom'>
          <path
            d='M8 6.586L14.293.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 011.707.293z'
            transform='translate(7 11)'
          />
        </clipPath>
      </defs>
      <path
        data-name='Icon/Chevron Bottom background'
        fill='none'
        d='M0 0h30v30H0z'
      />
      <g data-name='Icon/Chevron Bottom'>
        <path d='M0 0h30v30H0z' fill='none' />
        <path
          data-name='Mask'
          d='M15 17.586l6.293-6.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414z'
        />
        <g
          data-name='Icon/Chevron Bottom'
          clipPath='url(#prefix__chevronbottom)'
        >
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
