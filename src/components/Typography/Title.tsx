import clsx from 'clsx';

import { TypographyProps } from './Typography.type';

export const Title = ({ children, className }: TypographyProps) => {
  return <span className={clsx('text-5xl font-medium', className)}>{children}</span>;
};
