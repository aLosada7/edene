export interface FormInput {
    id?: string;
    /**
     * Appears above the text input
     */
    label?: string;
    /**
     * Adds the word "Optional" after the label. Non-optional fields are rendered with the `required` attribute.
     */
    optional?: boolean;
}
