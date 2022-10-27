export interface FormInput {
    id?: string;

    /** Input label, displayed before input */
    label?: string;

    /** Adds the word "Optional" after the label. Non-optional fields are rendered with the `required` attribute. */
    // optional?: boolean;

    /** Appears as an inline error message. */
    error?: string;

    /**
     * Appears as an inline success message.
     * This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
     */
    success?: string;
}
