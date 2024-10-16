'use client';

import { AuthCard } from './auth-card';

export const LoginForm = () => {
  return (
    <AuthCard
      cardTitle="Welcome Back!!"
      backButtonHref="/auth/register"
      backButtonLabel="Create a New Account"
      showSocials
    >
      <div>Hey</div>
    </AuthCard>
  );
};
