import React from 'react';
import Image from 'next/image';

import newImg from '@/assets/default.jpg';
import { Chip, Label, Modal, ModalBody, ModalContent, ModalHeader, Text } from '@/components';

type MusicianModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MusicianModal = ({ isOpen, onClose }: MusicianModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        size="2xl"
        className="bg-primary-600"
        classNames={{ closeButton: 'hover:bg-white/5 active:bg-white/10' }}
        backdrop="blur"
        onClose={onClose}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 text-default-600">Default Name</ModalHeader>
            <ModalBody>
              <div className="flex gap-10 ">
                <div className="flex flex-col justify-center gap-5">
                  <Image src={newImg} alt="Default" className="rounded-md" height={2000} />
                  <div className="grid grid-cols-3 gap-2">
                    <Chip variant="bordered">Genre</Chip>
                    <Chip variant="bordered">Genre</Chip>
                    <Chip variant="bordered">Genre</Chip>
                    <Chip variant="bordered">Genre</Chip>
                    <Chip variant="bordered">Genre</Chip>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis, officiis incidunt
                    dignissimos saepe expedita debitis laboriosam veniam reiciendis repellendus id corrupti
                    reprehenderit ab magni quam dolorem iusto ipsam eius. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Repellendus accusamus sed nobis aperiam laborum pariatur quos, sapiente ipsa atque
                    magni accusantium, distinctio omnis. Maiores animi consequatur vero exercitationem laborum! Modi.
                  </Text>
                  <div className="flex gap-4 justify-between">
                    <Label>email@email.com</Label>
                    <Label>55 (48) 666666-5555</Label>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};