import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Message, UploadIcon } from '../../../icon/icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../asset/images';
import Tippy from '@tippyjs/react';
import Button from '../../../Button';
import Menu from '../../Popper/Menu';
import Image from '../../../Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routeConfig from '../../../../config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English1',
                            },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View profile',
        to: '/@tieuhy',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    // handle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routeConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="ok" />
                </Link>

                <Search></Search>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>

                            <Tippy content="Message video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Message></Message>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button disabled rounded>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="ok"
                                fallback="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/82edccbba3485a49d314752dcdc22867.jpeg?x-expires=1665309600&x-signature=3z6mGSTfjzlhdgwUGWAdwTaYsiQ%3D"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
