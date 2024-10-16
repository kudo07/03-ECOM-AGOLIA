'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

export const BackButton = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => {
  return (
    <Button className="font-medium w-full">
      <Link href={href} aria-Label>
        {label}
      </Link>
    </Button>
  );
};
