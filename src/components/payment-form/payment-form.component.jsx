import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CardElement,} from '@stripe/react-stripe-js';
import { PaymentFormContainer, FormContainer } from './payment-form.styles';



const PaymentForm = () => {

 /*  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe && !elements) {
      return;
    }
  } */

  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment:</h2>
      <FormContainer>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm;
