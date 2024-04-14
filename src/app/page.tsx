import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <Card>
        <CardHeader>
          <p>This is a example card</p>
        </CardHeader>
        <CardBody>Card Body</CardBody>
        <CardFooter>
          <Button>Like</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
