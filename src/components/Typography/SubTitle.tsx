import clsx from 'clsx';

import { TypographyProps } from './Typography.type';

export const SubTitle = ({ children, className }: TypographyProps) => {
  return <span className={clsx('text-4xl font-semibold', className)}>{children}</span>;
};
