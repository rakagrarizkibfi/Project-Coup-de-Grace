import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

type Color = (typeof colorList)[number];

export default function HomePage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  const [color, setColor] = React.useState<Color>('sky');

  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section
          className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', color)}
        >
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <Vercel className='text-5xl' />
            <h1 className={clsx('mt-4', textColor)}>
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className={clsx('mt-2 text-sm', textColor)}>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>

            <div className='mt-8 flex flex-wrap gap-2'>
              <Button
                onClick={toggleMode}
                variant={mode === 'dark' ? 'light' : 'dark'}
              >
                Set to {mode === 'dark' ? 'light' : 'dark'}
              </Button>
              {/* <Button onClick={randomize}>Randomize CSS Variable</Button> */}
            </div>
            <div className='mt-2 flex flex-wrap gap-2'>
              <select
                name='color'
                id='color'
                value={color}
                className={clsx(
                  'block max-w-xs rounded',
                  mode === 'dark'
                    ? 'bg-dark border border-gray-600'
                    : 'border-gray-300 bg-white',
                  'focus:border-primary-400 focus:ring-primary-400 focus:outline-none focus:ring'
                )}
                onChange={(e) => setColor(e.target.value as Color)}
              >
                {colorList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ButtonLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/blob/main/src/styles/colors.css'>
                Check list of colors
              </ButtonLink>
            </div>
            <p className={clsx('mt-2 text-sm', textColor)}>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

            <UnstyledLink
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
              className='mt-4'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='Deploy with Vercel'
              />
            </UnstyledLink>

            <footer className={clsx('absolute bottom-2', textColor)}>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='#'>Raka Grarizki Arsetyo</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const colorList = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;
