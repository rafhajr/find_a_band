import { ReactNode } from 'react';

export type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export type VariantProps = 'medium' | 'semibold' | 'bold' | 'italic';

export type TextProps = TypographyProps & {
  variant?: VariantProps;
};
