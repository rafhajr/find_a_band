import clsx from 'clsx';

import { TypographyProps } from './Typography.type';

export const CardTitle = ({ children, className }: TypographyProps) => {
  return <span className={clsx('text-lg font-semibold', className)}>{children}</span>;
};
