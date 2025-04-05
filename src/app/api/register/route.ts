import { NextResponse } from 'next/server';
import { registerUser } from '@/lib/users';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password, name } = body;

  const user = await registerUser(email, password, name);
  return NextResponse.json({ success: true, user });
}
