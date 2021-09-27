import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, UserCircleIcon } from '@heroicons/react/outline'
import ColorLogo from '../../assets/images/logo/Colorlogonobackground.svg'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import { AnimatedDiv } from './animatedDiv'
import de from '../../assets/images/flag/de.svg'
import us from '../../assets/images/flag/us.svg'
import { FormattedMessage } from 'react-intl'
import { useDarkMode } from '../../providers/DarkModeProvider'

import { GiSunRadiations, GiMoon } from 'react-icons/gi'
let navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'CV', href: 'cv', current: false },
    { name: 'Trivia', href: '/trivia', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation({ changeLocale }) {
    let location = useLocation()
    const { darkMode, setDarkMode } = useDarkMode()

    useEffect(() => {
        navigation.map((item, idx) =>
            item.href === location.pathname
                ? (item.current = true)
                : (item.current = false)
        )
    })

    let { logout, currentUser } = useAuth()
    const [currentActive, setCurrentActive] = useState(0)
    return (
        <Disclosure
            as="nav"
            className="bg-gray-800 sticky w-full z-50 top-0 dark:bg-indigo-400">
            {({ open }) => (
                <>
                    <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 ">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to="/">
                                        <img
                                            className="block h-12 w-auto"
                                            src={ColorLogo}
                                            alt="Workflow"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6 text-center my-auto mx-auto ">
                                    <div className="flex space-x-4 items-center">
                                        {navigation.map((item, indexEl) =>
                                            item.href === '/trivia' ? (
                                                <AnimatedDiv
                                                    animation={true}
                                                    key={item.name}>
                                                    <Link
                                                        onClick={e => {
                                                            navigation.forEach(
                                                                (item, idx) => {
                                                                    idx ===
                                                                    indexEl
                                                                        ? setCurrentActive(
                                                                              idx
                                                                          ) &&
                                                                          (item.current = true)
                                                                        : (item.current = false)
                                                                }
                                                            )
                                                        }}
                                                        key={item.name}
                                                        to={item.href}
                                                        className={classNames(
                                                            currentActive ===
                                                                indexEl
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? 'page'
                                                                : undefined
                                                        }>
                                                        {item.name}
                                                    </Link>
                                                </AnimatedDiv>
                                            ) : (
                                                <Link
                                                    onClick={e => {
                                                        navigation.forEach(
                                                            (item, idx) => {
                                                                idx === indexEl
                                                                    ? setCurrentActive(
                                                                          idx
                                                                      ) &&
                                                                      (item.current = true)
                                                                    : (item.current = false)
                                                            }
                                                        )
                                                    }}
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        currentActive ===
                                                            indexEl
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? 'page'
                                                            : undefined
                                                    }>
                                                    {item.name}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
										<span className='sr-only'>
											View notifications
										</span>
										<BellIcon
											className='h-6 w-6'
											aria-hidden='true'
										/>
									</button> */}

                                {/* Profile dropdown */}
                                <div className="mr-3">
                                    {darkMode === 'dark' ? (
                                        <GiSunRadiations
                                            onClick={() => setDarkMode('light')}
                                            style={{
                                                fill: 'yellow',
                                                height: '2em',
                                                width: '2em',
                                            }}></GiSunRadiations>
                                    ) : (
                                        <GiMoon
                                            onClick={() => setDarkMode('dark')}
                                            style={{
                                                fill: 'darkcyan',

                                                height: '2em',
                                                width: '2em',
                                            }}></GiMoon>
                                    )}
                                </div>

                                <div className="flex-column">
                                    {' '}
                                    <img
                                        onClick={() => changeLocale('de')}
                                        src={de}
                                        alt="germanFlag"
                                        className="w-2 h-2"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                        }}
                                    />{' '}
                                    <img
                                        onClick={() => changeLocale('en')}
                                        src={us}
                                        alt="germanFlag"
                                        className="w-2 h-2"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                        }}
                                    />
                                </div>

                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <UserCircleIcon
                                                className="h-8 w-8 text-white"
                                                aria-hidden="true"
                                            />

                                            {/* <img
													className='h-8 w-8 rounded-full'
													src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
													alt=''
												/> */}
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/profile"
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100'
                                                                : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}>
                                                        <FormattedMessage
                                                            id="nav.profile"
                                                            defaultMessage="Profile"></FormattedMessage>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            {/* <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/settings"
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100'
                                                                : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}>
                                                        <FormattedMessage
                                                            id="nav.settings"
                                                            defaultMessage="Settings"></FormattedMessage>{' '}
                                                    </Link>
                                                )}
                                            </Menu.Item> */}
                                            <Menu.Item>
                                                {({ active }) =>
                                                    currentUser ? (
                                                        <Link
                                                            onClick={logout}
                                                            to="/logout"
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}>
                                                            {' '}
                                                            <FormattedMessage
                                                                id="nav.logout"
                                                                defaultMessage="Logout"></FormattedMessage>{' '}
                                                        </Link>
                                                    ) : (
                                                        <>
                                                            <Link
                                                                to="/login"
                                                                className={classNames(
                                                                    active
                                                                        ? 'bg-gray-100'
                                                                        : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}>
                                                                <FormattedMessage
                                                                    id="nav.login"
                                                                    defaultMessage="login"></FormattedMessage>{' '}
                                                            </Link>
                                                            <Link
                                                                to="/register"
                                                                className={classNames(
                                                                    active
                                                                        ? 'bg-gray-100'
                                                                        : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}>
                                                                <FormattedMessage
                                                                    id="nav.register"
                                                                    defaultMessage="register"></FormattedMessage>
                                                            </Link>
                                                        </>
                                                    )
                                                }
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item, indexEl) => (
                                <Link
                                    onClick={e => {
                                        navigation.forEach((item, idx) => {
                                            idx === indexEl
                                                ? setCurrentActive(idx) &&
                                                  (item.current = true)
                                                : (item.current = false)
                                        })
                                    }}
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={
                                        item.current ? 'page' : undefined
                                    }>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
