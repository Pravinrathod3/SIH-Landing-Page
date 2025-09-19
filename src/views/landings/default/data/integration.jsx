// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Tailored for Every Industry',
  captionLine: 'Industry-Specific Data Wiping Solutions To Meet Compliance Needs.',
  primaryBtn: {
    children: 'Documentation',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'Enterprise' },
    { label: 'ITAD' },
    { label: 'Refurbisher ' },
    { label: 'Government' },
    { label: 'Managed Service Provider' },
    { label: 'Education' },
    { label: 'Healthcare' },
    { label: 'Insurance' },
    { label: 'Banking' },
    { label: 'Finance' },
    { label: 'Cloud Data Centers' },
    { label: 'Mobile & Telecom Industry' },
    { label: 'Military' },
    { label: 'Small & Medium Businesses' }
  ]
};
