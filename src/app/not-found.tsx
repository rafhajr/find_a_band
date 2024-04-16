'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  });
};

export { NotFoundPage as default };
