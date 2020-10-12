import React from 'react'
import { ReactSVG } from 'react-svg'
import { classes } from '../../../utils'
import './styles.css'

export type IconName =
  | 'arrow-right'
  | 'home'
  | 'plus'
  | 'settings'
  | 'star-alt'
  | 'star'
  | 'users'

export type IconSize =
  | 'small'
  | 'medium'
  | 'large'

export interface IconProps {
  name: IconName
  size?: IconSize
  color?: string
}

export const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = 'medium',
  ...props
}) => {
  const iconClasses = classes({
    icon: true,
    [`icon--${size}`]: !!size,
    [`icon--${name}`]: true
  })
  const source = require(`../../../assets/svgs/${name}.svg`)
  return (
    <ReactSVG
      className={iconClasses}
      src={source}
      style={{ color }}
      {...props}
    />
  )
}
