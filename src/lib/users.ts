import bcrypt from 'bcryptjs';

export type User = {
  id?: string;
  _id?: string;
  userId?: number;
  email: string;
  name: string;
  password: string;
};

export const users: User[] = [];

export const registerUser = async (email: string, password: string, name: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { email, name, password: hashedPassword };
  users.push(user);
  return user;
};

export async function loginUser(email: string, password: string): Promise<User | null> {
  const user = users.find((u) => u.email === email);
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch ? user : null;
};
