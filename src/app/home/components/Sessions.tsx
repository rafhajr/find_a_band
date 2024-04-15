import { CardShow, SubTitle } from '@/components';

export const Sessions = () => {
  return (
    <div className="flex flex-col gap-8 w-full  p-5">
      <SubTitle>Instrument</SubTitle>

      <div className="flex gap-5 px-10">
        <CardShow />
      </div>
    </div>
  );
};
