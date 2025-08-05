const getQuote = async () => {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    return data;
};

export default getQuote;
