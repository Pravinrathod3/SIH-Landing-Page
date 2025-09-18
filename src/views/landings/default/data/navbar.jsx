// @project

import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  secondaryBtn: null, 
  primaryBtn: { children: 'Download Now', href: BUY_NOW_URL, ...linkProps },
  navItems: [
    { id: 'home', title: 'Home', link: '/' },
    {id: 'features', title: 'Features', link: '/'},
    { id: 'components', title: 'Pricing', link: SECTION_PATH },
    { id: 'dashboard', title: 'About', link: ADMIN_PATH, ...linkProps },
    { id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
