import clsx from 'clsx';

import { TypographyProps } from './Typography.type';

export const Label = ({ children, className }: TypographyProps) => {
  const classes = clsx('text-xs font-normal text-foreground', className);

  return <span className={classes}>{children}</span>;
};
