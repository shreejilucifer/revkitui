import * as React from 'react'

export const Alert = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      data-name='Icon/Alert'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 30 30'
    >
      <defs>
        <clipPath id='prefix__alert'>
          <path
            d='M1 20a1 1 0 01-.875-1.485l10-18a1 1 0 011.748 0l10 18A1 1 0 0121 20z'
            transform='translate(3.999 5)'
          />
        </clipPath>
      </defs>
      <path data-name='Icon/Alert background' fill='none' d='M0 0h30v30H0z' />
      <g data-name='Icon/Alert'>
        <path d='M0 0h30v30H0z' fill='none' />
        <path
          data-name='Mask'
          d='M4.999 25a1 1 0 01-.875-1.485l10-18a1 1 0 011.748 0l10 18A1 1 0 0124.999 25z'
        />
        <g data-name='Icon/Alert' clipPath='url(#prefix__alert)'>
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
