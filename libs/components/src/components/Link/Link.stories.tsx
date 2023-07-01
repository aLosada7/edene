import { Story, Meta } from '@storybook/react';
import LinkNext from 'next/link';
import Link, { LinkProps } from './Link';

export default {
    component: Link,
    title: 'Lab/Link',
} as Meta;

export const Default: Story<LinkProps> = () => <Link href="#">Link</Link>;

export const Polymorphic: Story<LinkProps> = () => (
    <Link as={LinkNext} href="#">
        Link
    </Link>
);
