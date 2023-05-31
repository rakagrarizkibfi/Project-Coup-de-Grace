import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const links = [
  { href: '/id', label: 'EN' },
  { href: '/en', label: 'ID' },
];

export default function Header() {
  return (
    <div className='sticky top-0'>
      <header className=' bg-white'>
        <div className='layout flex h-8 items-center justify-between'>
          <UnstyledLink
            href='/'
            className='text-sm font-bold text-blue-600 hover:text-blue-800'
          >
            Beranda
          </UnstyledLink>
          <div className=''>
            <ul className='flex space-x-[36px]'>
              <li>
                <UnstyledLink
                  href='/'
                  className='text-sm font-semibold text-slate-400 hover:text-green-500 '
                >
                  Informasi Perusahaan
                </UnstyledLink>
              </li>
              <li>
                <UnstyledLink
                  href='/'
                  className='text-sm font-semibold text-slate-400 hover:text-green-500'
                >
                  Karir
                </UnstyledLink>
              </li>
              <li>
                <UnstyledLink
                  href='/'
                  className='text-sm font-semibold text-slate-400 hover:text-green-500'
                >
                  Blog
                </UnstyledLink>
              </li>
            </ul>
          </div>
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
      <div className=' bg-blue-700 px-2 py-6'>
        <div className='layout flex h-8 items-center justify-between'>
          <UnstyledLink
            href='/'
            className='text-sm font-bold text-blue-500 hover:text-blue-800'
          >
            <NextImage
              useSkeleton
              className=''
              src='/logo/logo-bfi-72.png'
              width='54'
              height='54'
              alt='Icon-Logo'
            />
          </UnstyledLink>
          <div className=''>
            <ul className='flex space-x-24'>
              <li
                className='font-bold
              '
              >
                <UnstyledLink
                  href='/'
                  className='gap-8 text-lg font-bold text-white  hover:text-green-500 '
                >
                  Produk
                </UnstyledLink>
              </li>
              <li
                className='font-bold
              '
              >
                <UnstyledLink
                  href='/'
                  className='gap-8 text-lg font-bold text-white hover:text-green-500'
                >
                  Layanan
                </UnstyledLink>
              </li>
              <li
                className='font-bold 
              '
              >
                <UnstyledLink
                  href='/'
                  className='gap-8 text-lg font-bold text-white hover:text-green-500'
                >
                  Promo
                </UnstyledLink>
              </li>
            </ul>
          </div>
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
