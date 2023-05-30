import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

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
          <header className='layout absolute top-0 min-w-full bg-blue-700 px-2 py-2'>
            <p className='text-white'>Muerta</p>
          </header>
          {/* <div className='layout absolute top-0 min-w-full bg-blue-700 px-2 py-2'>
            <p className='text-white'>Pernambucano</p>
          </div> */}
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className={clsx('mt-4', textColor)}>Muerta Finance</h1>
            <p className={clsx('mt-2 text-sm', textColor)}>
              Your Trusty Financial Companion
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

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

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
