import { useQuery } from "react-query";
import getQuote from "./getQuoteApi";

export default function Quote({ quote }) {
  const { data } = useQuery("quote", () => getQuote());

  let styles = {
    headingStyle: {
      fontSize: "24px",
      textTransform: "uppercase",
    },
    quoteStyle: {
      fontSize: "18px",
      opacity: "0.7",
      textAlign: "center",
      display: "flex",
      gap: "12px",
    },
    containerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      fontFamily: "Arial",
    },
    kbShortcutStyle: {
      display: "flex",
      background: "gray",
      padding: "4px",
      borderRadius: "3px",
      fontSize: "12px",
      width: "fit-content",
    },
  };

  let { containerStyle, headingStyle, quoteStyle, kbShortcutStyle } = styles;

  return (
    <div style={containerStyle}>
      <img width={100} src="./quote.png" alt="quote-image" />
      <br />
      <h1 style={headingStyle}>An great talk by {data?.author}</h1>
      <div style={quoteStyle}>{data?.quote}</div>
      <br />
      <div style={quoteStyle}>
        <div style={kbShortcutStyle}>
          <kbd>Ctrl</kbd> + <kbd>R</kbd>
        </div>{" "}
        to reload the page so you can read more quotes
      </div>
    </div>
  );
}
