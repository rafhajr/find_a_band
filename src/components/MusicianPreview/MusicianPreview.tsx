'use client';

import { useState } from 'react';
import { Avatar } from '@nextui-org/react';

import { Button } from '../Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card';
import { MusicianModal } from '../MusicianModal';
import { Text } from '../Typography';

import { MusicianProps } from '@/@types/musicianProps';

export const MusicianPreview = ({ musician }: { musician: MusicianProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="p-1 bg-primary-500">
        <CardHeader>
          <Text variant="bold" className="text-default-600 truncate ...">
            {musician.name || 'Default Name'}
          </Text>
        </CardHeader>
        <CardBody className="flex items-center">
          <Avatar src={musician.photo} className="w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44" radius="sm" />
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
