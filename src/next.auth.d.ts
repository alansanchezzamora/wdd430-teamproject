// src/types/next-auth.d.ts

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isSeller: boolean;
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }
}
