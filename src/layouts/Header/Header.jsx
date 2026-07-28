import './Header.scss'
import Logo from '@/components/Logo'
import classNames from 'classnames'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'

const Header = (props) => {
  const {
    url,
    isFixed,
  } = props

const BASE_URL = import.meta.env.BASE_URL

const menuItems = [
  {
    label: 'Home',
    href: `${BASE_URL}index.html`,
  },
  {
    label: 'Movies & Shows',
    href: `${BASE_URL}movies.html`,
  },
  {
    label: 'Support',
    href: `${BASE_URL}support.html`,
  },
  {
    label: 'Subscriptions',
    href: `${BASE_URL}subscriptions.html`,
  },
]

console.log('URL:', url)
console.log('ITEMS:', menuItems)

const currentPage = url.split('/').pop() || 'index.html'

  return (
    <header
      className={classNames('header', {
        'is-fixed': isFixed,
      })}
      data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo
          className="header__logo"
          loading="eager"
        />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={classNames('header__menu-link', {
                      'is-active': href === currentPage,
                    })}
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="search"
            />
            <Button
              className="header__button"
              label="Notifications"
              isLabelHidden
              mode="transparent"
              iconName="notification"
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}

export default Header
