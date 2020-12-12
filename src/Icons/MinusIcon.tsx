import * as React from 'react'

export const Minus = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      id='prefix__minusIcon_Minus'
      data-name='Icon/Minus'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 30 30'
    >
      <defs>
        <clipPath id='prefix__minusclip-path'>
          <path
            id='prefix__minusMask'
            d='M1 2a1 1 0 010-2h14a1 1 0 010 2z'
            transform='translate(7 14)'
          />
        </clipPath>
        <style>{'.prefix__minuscls-1{fill:none}'}</style>
      </defs>
      <path
        id='prefix__minusIcon_Minus_background'
        data-name='Icon/Minus background'
        className='prefix__minuscls-1'
        d='M0 0h30v30H0z'
      />
      <g id='prefix__minusIcon_Minus-2' data-name='Icon/Minus'>
        <path
          id='prefix__minusGrid'
          className='prefix__minuscls-1'
          d='M0 0h30v30H0z'
        />
        <path
          id='prefix__minusMask-2'
          data-name='Mask'
          d='M1 2a1 1 0 010-2h14a1 1 0 010 2z'
          transform='translate(7 14)'
        />
        <g
          id='prefix__minusIcon_Minus-3'
          data-name='Icon/Minus'
          clipPath='url(#prefix__minusclip-path)'
        >
          <g id='prefix__minusColor'>
            <path
              id='prefix__minusIcon_Fill_Accent'
              data-name='Icon/\uD83D\uDD8C Fill/Accent'
              d='M0 0h30v30H0z'
              fill={props.color}
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
