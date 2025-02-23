import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import Container from '../../Atoms/Container';

import { handleScrollTo } from '../../../helpers/events';
import { navigation } from './content';

const Navbar = () => {
  /**
   * Handler to close the mobile menu when a link is clicked
   * @param href
   * @param closeCallback
   */
  function handleMobileClick(href: string, closeCallback: () => void): void {
    if (typeof closeCallback === 'function') {
      closeCallback();
    }
    handleScrollTo(href);
  }

  return (
    <Disclosure
      as="nav"
      className={
        'fixed top-0 z-[999] w-full bg-brand-darker-blue transition-all'
      }
    >
      {({ open, close }) => (
        <>
          <Container size={'xl'}>
            <div className="flex h-16 justify-between lg:h-20">
              <div className="flex flex-shrink-0 items-center">
                <button
                  onClick={() => handleScrollTo('app-top')}
                  className={'focus:outline-none'}
                >
                  <span className="w-full lg:hidden">
                    <picture>
                      <source
                        srcSet={'/hydranet-logo.svg'}
                        type={'image/svg+xml'}
                      />
                      <source
                        srcSet={'/hydranet-logo.png'}
                        type={'image/png'}
                      />
                      <img
                        src={'/hydranet-logo.png'}
                        alt={'hydranet logo'}
                        className={'mx-auto h-8 sm:h-10'}
                      />
                    </picture>
                  </span>
                  <img
                    className="hidden h-10 w-auto cursor-pointer lg:block"
                    src="./hydranet-full-logo.png"
                    alt="Hydranet Logo"
                  />
                </button>
              </div>
              {/* LG menu */}

              <div className="my-auto hidden h-10 sm:space-x-3 lg:flex">
                {navigation.map((link) => {
                  if (link.href.startsWith('#')) {
                    return (
                      <button
                        key={link.href}
                        className={'nav-link nav-link--anchor'}
                        onClick={() => handleScrollTo(link.href)}
                      >
                        {link.name}
                      </button>
                    );
                  } else {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.target || '_self'}
                        className={`nav-link nav-link--${
                          link.bg ? `button ${link.bg}` : 'anchor'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  }
                })}
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-brand-light-blue hover:text-brand-aqua focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-light-blue">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden={open} />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden={!open} />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </Container>
          {/* Mobile menu content*/}
          <span className="w-full bg-brand-darker-blue lg:hidden">
            <Container>
              <Disclosure.Panel>
                <ul className="space-y-3 pt-2 pb-3">
                  {navigation.map((link) => (
                    <li
                      key={link.href}
                      className={
                        link.bg && 'inline-block w-1/2 pt-1.5 pb-2 text-center'
                      }
                    >
                      {link.href.startsWith('#') ? (
                        <button
                          className={'nav-link nav-link--anchor'}
                          onClick={() => handleMobileClick(link.href, close)}
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          // @ts-ignore
                          onClick={close}
                          tabIndex={0}
                          target={link.target || '_self'}
                          className={`nav-link ${
                            link.bg
                              ? `${link.bg} nav-link--button nav-link--button-mobile`
                              : 'nav-link--anchor-mobile'
                          } `}
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </Container>
          </span>
        </>
      )}
    </Disclosure>
  );
};
export default Navbar;
