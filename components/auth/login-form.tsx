'use client';

import { AuthCard } from './auth-card';
import { zodResolver } from '@hookform/resolvers/zod';
export const LoginForm = () => {
  return (
    <AuthCard
      cardTitle="Welcome Back!!"
      backButtonHref="/auth/register"
      backButtonLabel="Create a New Account"
      showSocials
    >
      <div> </div>
    </AuthCard>
  );
};
