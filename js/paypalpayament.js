
  paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
      sandbox: 'ATaq6WyVQWSQ2yZPyaFBhnD4I5QdxqKXN1rdAqK9aigpxL-OZb68bpbmwDYi9zLx00LLqKKH2NqIaR9h',
      production: 'demo_production_client_id'
    },
    // Customize button (optional)
      locale: 'pt_PT',
      style: {
      size: 'medium',
      color: 'gold',
      shape: 'pill',
      fundingicons: 'true',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: '50.00',
            currency: 'EUR'
          }
        }]
      });
    },
    // Execute the payment
    onAuthorize: function(data, actions) {
      return actions.payment.execute().then(function() {
        // Show a confirmation message to the buyer
        window.alert('Thank you for your purchase!');
      });
    }
  }, '#paypal-button');

  allowed: [ paypal.FUNDING.CREDIT ]