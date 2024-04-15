import Image from 'next/image';

import { Button } from '../Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card';
import { Chip } from '../Chip';
import { CardTitle } from '../Typography';

import defaultImage from '@/assets/default.jpg';

export const CardShow = () => {
  return (
    <Card className="p-4 bg-primary-500">
      <CardHeader>
        <CardTitle>Default Name</CardTitle>
      </CardHeader>
      <CardBody className="flex gap-4 w-56 items-center">
        <Image src={defaultImage} alt="Default" className="rounded-md" />
        <div className="flex gap-3">
          <Chip variant="bordered">Genre</Chip>
          <Chip variant="bordered">Genre</Chip>
        </div>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button>See more</Button>
      </CardFooter>
    </Card>
  );
};
