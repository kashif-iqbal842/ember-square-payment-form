import Component from '@ember/component';
/**
 * Renders a Materpass button for use in the Square Payment Form, pre-styled to meet
 * Masterpass branding guidelines.
 *
 * It includes the ability to change the theme of the button and localize the button copy.
 *
 * **This component will only render when a customer can use Masterpass.**
 *
 * If you need to adjust your content based on whether the Payment Form can accept Masterpass or not,
 * you can use the `PaymentForm.canShowMasterpass` property in your template, like so:
 *
 * ```hbs
 * <SquarePaymentForm as |PaymentForm|>
 *   <PaymentForm.MasterpassButton/>
 *
 *   {{#unless PaymentForm.canShowMasterpass}}
 *     <p>Masterpass is not available here.</p>
 *   {{/unless}}
 * </SquarePaymentForm>
 *
 * {{!-- or, if you're using < Ember 3.4 --}}
 *
 * {{#square-payment-form as |PaymentForm|}}
 *   {{PaymentForm.MasterpassButton}}
 *
 *   {{#unless PaymentForm.canShowMasterpass}}
 *     <p>Masterpass is not available here.</p>
 *   {{/unless}}
 * {{/square-payment-form}}
 * ```
 *
 * *Note: you'll need to configure the SquarePaymentForm to implement Masterpass;*
 * *you can read more in the digital wallets guide.*
 */
export default class SquarePaymentFormMasterpassButton extends Component {
    /**
     * Adds an ARIA label to describe the button since there's no text for a screenreader to use.
     * @private
     */
    label: string;
    /**
     * Generates a BEM-compliant CSS class to hide Masterpass when it's not supported.
     * @private
     */
    isSupported: boolean;
    /**
     * ID generated by the parent Payment Form component used to generate a reference to an
     * instance of this button.
     * @private
     */
    formId: string;
    /**
     * Generated HTML ID referenced by the parent Payment Form component to reference an
     * instance of this button.
     * @private
     */
    readonly uniqueMasterpassId: string;
}
