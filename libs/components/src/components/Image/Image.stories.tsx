import NextImage from 'next/image';
import { Meta, Story } from '@storybook/react';

import { Image } from './Image';
import { ImageProps, imageSizeValues, imageObjectFitValues } from './types';

export default {
    component: Image,
    title: 'Components/Image',
} as Meta;

export const Playground: Story<ImageProps> = (args) => <Image {...args} />;
Playground.storyName = '🧶 Playground';
Playground.args = {
    src: 'http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png',
    alt: 'Image',
    objectFit: 'cover',
};
Playground.argTypes = {
    size: {
        control: 'select',
        options: imageSizeValues,
        defaultValue: 'c',
    },
    objectFit: {
        control: 'select',
        options: imageObjectFitValues,
        defaultValue: 'cover',
    },
};

export const Default = () => (
    <Image
        src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
        alt="Image"
    />
);

export const PolymorphicComponent = () => (
    <Image
        as={NextImage}
        src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
        alt="Image"
        layout="fill"
    />
);
PolymorphicComponent.args = {
    layout: 'fill',
};
