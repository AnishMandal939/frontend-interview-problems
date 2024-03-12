import CheckoutStepper from "./CheckoutStepper";

const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complete payment for your order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div> Your order has been delivered.</div>,
    },
  ];

export default function Stepper() {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutStepper stepConfig={CHECKOUT_STEPS} />
    </div>
  )
}
