import Image from 'next/image';

import newImg from '@/assets/default.jpg';
import { Card, CardBody, CardHeader, CardTitle, Chip, Header, Label, Text } from '@/components';

const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex gap-10 p-20">
        <Card className="p-4 bg-primary-500">
          <CardHeader>
            <CardTitle>Default Name</CardTitle>
          </CardHeader>
          <CardBody className="flex flex-row gap-8">
            <div className="flex flex-col gap-2">
              <Image src={newImg} alt="Default" className="rounded-md" height={1000} />
              <div className="flex gap-3">
                <Chip variant="bordered">Genre</Chip>
                <Chip variant="bordered">Genre</Chip>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis, officiis incidunt dignissimos
                saepe expedita debitis laboriosam veniam reiciendis repellendus id corrupti reprehenderit ab magni quam
                dolorem iusto ipsam eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
                accusamus sed nobis aperiam laborum pariatur quos, sapiente ipsa atque magni accusantium, distinctio
                omnis. Maiores animi consequatur vero exercitationem laborum! Modi.
              </Text>
              <div className="flex gap-4">
                <Label>email@email.com</Label>
                <Label>55 (48) 666666-5555</Label>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Home as default };
