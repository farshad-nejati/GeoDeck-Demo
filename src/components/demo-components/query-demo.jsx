import React from 'react';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const QueryDemo = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }, index) => {
    if (index > 9) {
      return null;
    }
    return (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    );
  });
};

export default QueryDemo;
