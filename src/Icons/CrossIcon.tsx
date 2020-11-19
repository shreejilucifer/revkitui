import * as React from 'react'

export const Cross = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      data-name='Icon/Cross'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 30 30'
      {...props}
    >
      <defs>
        <clipPath id='prefix__a'>
          <path
            d='M12.293 13.707L7 8.414l-5.293 5.293a1 1 0 01-1.414-1.414L5.586 7 .293 1.707A1 1 0 011.707.293L7 5.586 12.293.293a1 1 0 011.414 1.415L8.414 7l5.293 5.293a1 1 0 11-1.414 1.414z'
            transform='translate(8 8)'
          />
        </clipPath>
      </defs>
      <path data-name='Icon/Cross background' fill='none' d='M0 0h30v30H0z' />
      <g data-name='Icon/Cross'>
        <path d='M0 0h30v30H0z' fill='none' />
        <path
          data-name='Mask'
          d='M20.293 21.707L15 16.414l-5.293 5.293a1 1 0 01-1.414-1.414L13.586 15 8.293 9.707a1 1 0 011.414-1.414L15 13.586l5.293-5.293a1 1 0 011.414 1.415L16.414 15l5.293 5.293a1 1 0 11-1.414 1.414z'
        />
        <g data-name='Icon/Cross' clipPath='url(#prefix__a)'>
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
