import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const links = [
  { href: '/id', label: 'EN' },
  { href: '/en', label: 'ID' },
];

export default function Header() {
  return (
    <div className=''>
      <header className='sticky top-0 z-50 bg-white'>
        <div className='layout flex h-8 items-center justify-between'>
          <UnstyledLink
            href='/'
            className='text-sm font-bold text-blue-600 hover:text-blue-800'
          >
            Beranda
          </UnstyledLink>
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className=' text-sm font-bold text-blue-600 hover:text-blue-800'
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div className=' relative bg-blue-700 px-2 py-6'>
        <div className='layout flex h-8 items-center justify-between'>
          <UnstyledLink
            href='/'
            className='text-sm font-bold text-blue-500 hover:text-blue-800'
          >
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/logo/logo-bfi-72.png'
              width='54'
              height='54'
              alt='Icon-Logo'
            />
          </UnstyledLink>
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              <UnstyledLink
                href='/'
                className=' text-md font-bold text-white hover:text-blue-800'
              >
                Masuk
              </UnstyledLink>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
