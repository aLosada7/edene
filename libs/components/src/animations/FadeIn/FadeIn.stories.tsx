import { Story } from '@storybook/react';

import { FadeIn } from './FadeIn';

export default {
    title: 'Animations/FadeIn',
    component: FadeIn,
};

export const Default: Story = () => {
    return (
        <FadeIn delay="1s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            rutrum orci. Sed pulvinar aliquet nulla, sed lacinia dui egestas id.
            Donec lorem justo, dictum at malesuada a, condimentum ac libero.
            Aenean sollicitudin dictum velit, eu congue urna malesuada eget.
            Maecenas tempor tempor massa id rutrum. Nam nec quam blandit,
            blandit arcu ac, lacinia tortor. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Integer
            blandit mollis auctor. Nullam in massa quis felis fermentum iaculis
            non a risus. Vivamus a lorem nec tortor posuere egestas. Proin
            varius imperdiet nibh vestibulum efficitur. Duis ac urna eu leo
            vehicula rhoncus id id odio.
        </FadeIn>
    );
};
Default.storyName = 'FadeIn';
