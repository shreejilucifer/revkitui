import * as React from 'react'

export const Add = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id='prefix__add'
      data-name='Icon/Add'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 30 30'
      {...props}
    >
      <defs>
        <clipPath id='prefix__clip-path'>
          <path
            id='prefix__add'
            d='M7 15V9H1a1 1 0 110-2h6V1a1 1 0 112 0v6h6a1 1 0 010 2H9v6a1 1 0 11-2 0z'
            transform='translate(7 7)'
          />
        </clipPath>
        <style>{'.prefix__cls-1{fill:none}'}</style>
      </defs>
      <path
        id='prefix__add_background'
        data-name='Icon/Add background'
        className='prefix__cls-1'
        d='M0 0h30v30H0z'
      />
      <g id='prefix__add-2' data-name='Icon/Add'>
        <path id='prefix__Grid' className='prefix__cls-1' d='M0 0h30v30H0z' />
        <path
          id='prefix__add-2'
          data-name='Mask'
          d='M7 15V9H1a1 1 0 110-2h6V1a1 1 0 112 0v6h6a1 1 0 010 2H9v6a1 1 0 11-2 0z'
          transform='translate(7 7)'
        />
        <g
          id='prefix__add-3'
          data-name='Icon/Add'
          clipPath='url(#prefix__clip-path)'
        >
          <g id='prefix__Color'>
            <path
              id='prefix__Icon_Fill_Accent'
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
