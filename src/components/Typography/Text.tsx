import clsx from 'clsx';

import { TextProps } from './Typography.type';

export const Text = ({ children, variant, className }: TextProps) => {
  const classes = clsx('text-sm font-normal text-foreground', className, {
    'font-medium': variant === 'medium',
    'font-semibold': variant === 'semibold',
    'font-bold': variant === 'bold',
    italic: variant === 'italic'
  });

  return <span className={classes}>{children}</span>;
};
