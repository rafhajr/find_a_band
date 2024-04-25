'use client';

import { useState } from 'react';
import { Avatar } from '@nextui-org/react';

import { Button } from '../Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card';
import { MusicianModal } from '../MusicianModal';
import { Text } from '../Typography';

import { MusicianProps } from '@/@types/musicianProps';

type MusicianPreview = {
  musician: MusicianProps;
};

export const MusicianPreview = ({ musician }: MusicianPreview) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="p-1 bg-primary-500">
        <CardHeader>
          <Text variant="bold" className="text-default-600">
            {musician?.name || 'Default Name'}
          </Text>
        </CardHeader>
        <CardBody className="flex gap-2 md:w-56 items-center">
          <Avatar src={musician.photo} className="w-28 h-28 md:w-[200px] md:h-[200px]" radius="sm" />
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button variant="light" size="sm" onClick={() => setIsOpen(true)}>
            See more...
          </Button>
        </CardFooter>
      </Card>
      <MusicianModal isOpen={isOpen} onClose={() => setIsOpen(false)} musician={musician} />
    </>
  );
};
