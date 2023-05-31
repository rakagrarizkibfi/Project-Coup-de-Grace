import clsx from 'clsx';
import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

// type Color = (typeof colorList)[number];

export default function Footer() {
  // const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  // const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className=''>
      <footer
        className={clsx(
          'bg-[#404040] px-8 py-8 text-center font-semibold text-white'
        )}
      >
        © {new Date().getFullYear()} By{' '}
        <UnderlineLink href='https://www.bfi.co.id/'>
          PT BFI Finance Indonesia Tbk.
        </UnderlineLink>
      </footer>
    </div>
  );
}
