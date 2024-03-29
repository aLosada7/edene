/* eslint-disable @typescript-eslint/ban-types */
type ExtendedProps<_ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
    Omit<_ExtendedProps, keyof OverrideProps>;

type PropsOf<
    C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

type InheritedProps<C extends React.ElementType, Props = {}> = ExtendedProps<
    PropsOf<C>,
    Props
>;

type ComponentProp<C extends React.ElementType> = {
    /** Tag or component that should be used as root element */
    as?: C;
};

export type PolymorphicRef<C> = C extends React.ElementType
    ? React.ComponentPropsWithRef<C>['ref']
    : never;

export type PolymorphicComponentProps<
    C,
    Props = {}
> = C extends React.ElementType
    ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
    : Props & { as: React.ElementType };
