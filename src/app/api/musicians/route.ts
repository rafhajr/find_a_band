import { NextResponse } from 'next/server';

import { allMusicians } from '../@fakeData/getFakeData';

export async function GET() {
  return NextResponse.json(allMusicians);
}
