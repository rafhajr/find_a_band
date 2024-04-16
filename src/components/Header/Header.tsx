'use client';

import Link from 'next/link';

import { Metric } from '../Typography';

export const Header = () => {
  return (
    <div className="flex w-full bg-primary-500 p-5">
      <Link href="/">
        <Metric>Find a Band</Metric>
      </Link>
    </div>
  );
};
