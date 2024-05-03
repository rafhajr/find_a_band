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
      <Card className="p-1 bg-primary-500 flex">
        <CardHeader>
          <Text variant="bold" className="text-default-600 truncate ...">
            {musician.name || 'Default Name'}
          </Text>
        </CardHeader>
        <CardBody className="flex gap-2  items-center ">
          <Avatar src={musician.photo} className="w-24 h-24 md:w-[180px] md:h-[180px]" size="sm" radius="sm" />
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
