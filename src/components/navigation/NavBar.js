/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom'

import {connect} from 'react-redux'
import { 
  setLoadWeb3,
  loadBlockchainData } from '../../redux/actions/wallet'


const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]

function NavBar({
  account,
  setLoadWeb3,
  loadBlockchainData,
  tether,
  tether_balance,
  uridium,
  uridium_balance,
  decentralBank,
  stakingBalance,
  loading
}) {

  useEffect(() => {
    setLoadWeb3()
    loadBlockchainData()
  }, [])

  return (
    <Popover className="relative ">
      <div className="absolute inset-0  z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link to='/' className="flex">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              
              <NavLink to='/markets' 
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                activeClassName="text-base font-medium text-gray-900"
                >
                Markets
              </NavLink>

              <NavLink to='/governance' 
              activeClassName="text-base font-medium text-gray-900"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
                Governance
              </NavLink>

              <NavLink to='/staking'
              activeClassName="text-base font-medium text-gray-900"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
                Staking
              </NavLink>
              
              <NavLink to='/documents'
              activeClassName="text-base font-medium text-gray-900"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
                Docs
              </NavLink>

              
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              
            Metamask Wallet: {account}
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <Link to='/staking' className="font-medium text-indigo-600 hover:text-indigo-500">
                      {' '}
                      Start earning interest now <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <NavLink to='/staking' className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Staking
                </NavLink>

                <NavLink to='/documents' className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </NavLink>

                <NavLink to='/markets' className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Markets
                </NavLink>
                <NavLink to='/governance' className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Governance
                </NavLink>

                
              </div>
              <div className="mt-6">
                Metamask Wallet: {account}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const mapStateToProps = state => ({
  account: state.wallet.account,
  tether: state.wallet.tether,
  tether_balance: state.wallet.tether_balance,
  uridium: state.wallet.uridium,
  uridium_balance: state.wallet.uridium_balance,
  decentralBank: state.wallet.decentralBank,
  stakingBalance: state.wallet.stakingBalance,
  loading: state.wallet.loading,
})

export default connect(mapStateToProps, {
  setLoadWeb3,
  loadBlockchainData
}) (NavBar)