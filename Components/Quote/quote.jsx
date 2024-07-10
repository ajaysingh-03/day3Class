import React from "react";
// import Header from "../Header/header";
// import Footer from "../Footer/footer";
import quotesData from './Q.json';
import './quote.css';

function Quote() {
  return (
    <div className="quote-container">
        {quotesData.map((q) => (
            <div className="quote-card" key={q.id}>
                <p className="quote-text">{q.quote}</p>
                <p className="quote-author">{q.author}</p>
            </div>
        ))}
    </div>
  );
}
export default Quote;

// const Quote = () => {
//     return (
//         <div className="quote-container">
//             {quotesData.map(quote => (
//                 <div key={quote.id} className="quote-card">
//                     <p className="quote-text">{quote.quote}</p>
//                     <p className="quote-author">- {quote.author}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Quote;
