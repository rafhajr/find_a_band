'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Button } from '../Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card';
import { MusicianModal } from '../MusicianModal';
import { Text } from '../Typography';

import defaultImage from '@/assets/default.jpg';

export const MusicianPreview = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="p-1 bg-primary-500">
        <CardHeader>
          <Text variant="bold" className="text-default-600">
            Default Name
          </Text>
        </CardHeader>
        <CardBody className="flex gap-2 w-56 items-center">
          <Image src={defaultImage} alt="Default" className="rounded-md" />
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button variant="light" size="sm" onClick={() => setIsOpen(true)}>
            See more...
          </Button>
        </CardFooter>
      </Card>
      <MusicianModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
