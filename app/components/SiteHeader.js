"use client";

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation } from '../../lib/content';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#content-start"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-brand-700"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-[#fbfaf6]">
        <div className="container-shell flex min-h-[76px] items-center justify-between gap-4">
          <a
            href="/"
            className="flex min-w-0 items-center gap-3 text-brand-900"
            aria-label="World Humanity Services home"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-700 text-xs font-bold tracking-wide text-white"
            >
              WHS
            </span>
            <span className="truncate text-sm font-semibold sm:text-base">
              World Humanity Services
            </span>
          </a>

          <button
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-brand-900 hover:bg-brand-50 sm:hidden"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>

          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${open ? 'absolute left-0 right-0 top-full border-b border-slate-200 bg-[#fbfaf6] px-5 py-3 shadow-lg sm:static sm:flex sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none' : 'hidden sm:flex sm:items-center sm:gap-6'} `}
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block rounded-lg px-2 py-3 text-sm font-medium transition-colors sm:px-0 sm:py-2 ${
                    isActive ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="/donate"
              className="btn-primary mt-2 w-full sm:mt-0 sm:min-h-10 sm:w-auto sm:px-5 sm:py-2 sm:text-sm"
              onClick={() => setOpen(false)}
            >
              Donate
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
