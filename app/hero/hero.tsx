'use client'

import UnstyledLinkButton from '../../components/Button';

export default function Hero() {
    return (
      <main className="p-16 w-full bg-[#F6F5F5]">
        <h1 className="text-black text-9xl">ZKEmail</h1>
        <p className='pb-3'>Prove who sent an email & any of it’s contents. Anonmously. On or Offchain.</p>
          <UnstyledLinkButton buttonLabel="Build" filledIn={true}>material ui button</UnstyledLinkButton>
      </main>
    );
  }
  