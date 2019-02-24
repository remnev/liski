import Link from '../link';
import './header.styl';

const menu = [
    {
        href: '/',
        text: 'Главная'
    },
    {
        href: '/about-school',
        text: 'О школе'
    },
    {
        href: '/news',
        text: 'Новости'
    },
    {
        href: '/prices',
        text: 'Цены'
    },
    {
        href: '/contests',
        text: 'Соревнования'
    },
    {
        href: '/contacts',
        text: 'Контакты'
    }
];

const Header = () => (
    <header className="header">
        <div className="header__content">
            <Link href="/">
                <a>
                    <img
                        className="header__logo"
                        src="/static/logo.png"
                        alt="Логотип горнолыжной школы Liski"
                    />
                </a>
            </Link>
            <ul className="header__menu">
                {
                    menu.map(({href, text}) => (
                        <li key={href}>
                            <Link
                                href={href}
                                activeClassName="header__menu-item_active"
                            >
                                <a>{text}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
);

export default Header;


/*<div className="header__content">

        <div className="header__contacts">
          <div><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+7&nbsp;977&nbsp;337&nbsp;77&nbsp;97</div>
          <div className="header__contact_type_map"><i className="fa fa-map-marker" aria-hidden="true"></i> <a href="https://yandex.ru/maps/-/CBF6Y2EFSB">СК&nbsp;"Дмитров"</a></div>
        </div>
      </div>*/
