// import React, { useState, useEffect } from 'react';
// //import the components we will need
// import { QuoteCard } from './Quotes.js';
// import { GetSingleQuote } from './QuoteManager.js';

// export const QuoteList = () => {
//   // The initial state is an empty array
//   const [Quotes, setQuote] = useState([]);

//   const GetQuotes = () => {
//     // After the data comes back from the API, we
//     //  use the setCustomers function to update state
//     return getQuote().then(QuotesFromAPI => {
//         const random = Math.floor(Math.random() * QuotesFromAPI.length)
//       setQuote(QuotesFromAPI[random])
//     });
//   };

//   // got the Customers from the API on the component's first render
//   useEffect(() => {
//     GetQuotes();
//   }, []);

//   // Finally we use .map() to "loop over" the Customers array to show a list of Customer cards
//   return (
//     <div className="container-cards">
//     <QuoteCard Quote={Quotes} />
//     </div>
//   );
// };