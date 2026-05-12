/** Documents frontend/app/app/identity/page.tsx module purpose, public surface, and usage context */
'use client';

import ComingSoon from '@/components/coming-soon';
import { Fingerprint } from 'lucide-react';

export default function IdentityPage() {
  return (
    <ComingSoon
      title="Identity Registry"
      description="On-chain identity verification linking GitHub profiles to Vara accounts. Reputation scoring and verified contributor status."
      icon={Fingerprint}
    />
  );
}
