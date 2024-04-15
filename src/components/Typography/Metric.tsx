import clsx from 'clsx';

import { TypographyProps } from './Typography.type';

export const Metric = ({ children, className }: TypographyProps) => {
  return <span className={clsx('text-3xl font-semibold', className)}>{children}</span>;
};
