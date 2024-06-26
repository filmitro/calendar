import React, { ReactNode } from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
 
} from '@heroicons/react/24/outline'
import Bremen from '../assets/bremen.png'
import Hamburg from '../assets/hamburg.png'
import Bayern from '../assets/Bayern.png'
import Berlin from '../assets/Berlin.png'
import Brandenburg from '../assets/Brandenburg.png'
import Hessen from '../assets/Hessen.png'
import SachsenAnhalt from '../assets/Sachsen-Anhalt.png'
import Saarland from '../assets/Saarland.png'
import Sachsen from '../assets/Sachsen.png'
import SchleswigHolstein from '../assets/Schleswig-Holstein.png'
import MecklenburgVorpommern from '../assets/Mecklenburg-Vorpommern.png'
import Niedersachsen from '../assets/Niedersachsen.png'
import NordrheinWestfalen from '../assets/Nordrhein-Westfalen.png'
import RheinlandPfalz from '../assets/Rheinland-Pfalz.png'
import Thuringen from '../assets/Thuringen.png'
import BadenWurttemberg from '../assets/baden_wurttemberg.png'

interface SidebarProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Baden-Württemberg', href: '#', icon: BadenWurttemberg, current: false },
  { name: 'Bayern', href: '#', icon: Bayern, current: false },
  { name: 'Berlin', href: '#', icon: Berlin, current: false },
  { name: 'Brandenburg', href: '#', icon: Brandenburg, current: false },
  { name: 'Bremen', href: '#', icon: Bremen, current: false },
  { name: 'Hamburg', href: '#', icon: Hamburg, current: false },
  { name: 'Hessen', href: '#', icon: Hessen, current: false },
  { name: 'Niedersachsen', href: '#', icon: Niedersachsen, current: false },
  { name: 'Nordrhein-Westfalen', href: '#', icon: NordrheinWestfalen, current: false },
  { name: 'Mecklenburg-Vorpommern', href: '#', icon: MecklenburgVorpommern, current: false },
  { name: 'Rheinland-Pfalz', href: '#', icon: RheinlandPfalz, current: false },
  { name: 'Saarland', href: '#', icon: Saarland, current: false },
  { name: 'Sachsen', href: '#', icon: Sachsen, current: false },
  { name: 'Sachsen-Anhalt', href: '#', icon: SachsenAnhalt, current: false },
  { name: 'Schleswig-Holstein', href: '#', icon: SchleswigHolstein, current: false },
  { name: 'Thüringen', href: '#', icon: Thuringen, current: false }
];


function classNames(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface SidebarProps {
  children: ReactNode;
  onStateSelect: (state: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ children, onStateSelect }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <div className="text-xl font-semibold leading-6 text-black-400">Deutscher Ferienkalender</div>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <button
                                  onClick={() => onStateSelect(item.name)}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <img src={item.icon}
                                    className={classNames(
                                      item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <div className="text-xl font-semibold leading-6 text-black-400">Deutscher Ferienkalender</div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <button
                                  onClick={() => onStateSelect(item.name)}
                                  className={classNames(
                                    item.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <img src={item.icon}
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">

                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Wählen Sie ein Bundesland aus</div>
        </div>

        <main className="lg:pl-72">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{/* Main area */} {children}</div>
        </main>

      </div>
    </>
  )
}

export default Sidebar;