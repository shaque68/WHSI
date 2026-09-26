"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation } from '../../lib/content';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
     <a href="#content-start" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-brand-700">
       Skip to content
     </a>
     <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
       <div className="container-shell flex items-center justify-between py-4">
         <Link href="/" className="flex items-center gap-3 font-semibold text-brand-700">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent text-sm font-bold text-white">
            WHS
          </span>
          <span className="text-base sm:text-lg">World Humanity Services Inc.</span>
        </Link>

        <button
          className="rounded-md p-2 text-slate-700 sm:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-0.5 w-6 bg-slate-700" />
          <span className="mt-1 block h-0.5 w-6 bg-slate-700" />
          <span className="mt-1 block h-0.5 w-6 bg-slate-700" />
        </button>

         <nav className={`absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-6 py-4 shadow-sm sm:static sm:flex sm:items-center sm:gap-5 sm:border-none sm:p-0 sm:shadow-none ${open ? 'block' : 'hidden sm:flex'}`}>
           {navigation.map((item) => {
             const isActive = pathname === item.href;
             return (
               <Link
                 key={item.href}
                 href={item.href}
                 className={`block py-2 font-medium ${isActive ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'} sm:py-0`}
                 onClick={() => setOpen(false)}
               >
                 {item.label}
               </Link>
             );
           })}
         </nav>
       </div>
     </header>
   </>
 );
}
