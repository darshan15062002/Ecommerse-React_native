
import { Provider } from "react-redux"

import Main from "./Main";
import { store } from "./redux/store";
import { StripeProvider } from '@stripe/stripe-react-native'
export default function App() {
  const stripekey = "pk_test_51NNU8VSGZ1yUfv2RBq4HlwqR16dEny9xRqb4JKziSPJ94Fbd1aEtM7R64kfhyEamyw01eSgJhtzVQEF3of7BBjqr00bxP8lLtE"
  return (
    <StripeProvider threeDSecureParams={{
      backgroundColor: '#fff',
      timeout: 5,
    }} merchantIdentifier="Ecommerce.com" publishableKey={stripekey}>
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}

