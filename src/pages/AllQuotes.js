import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
    {
        id:1,
        author:'joe schmoe',
        text: 'react is great'
    },
    {
        id:1,
        author:'tom thom',
        text: 'react is peachy'
    }
]
const AllQuotes = () => {
    return (<QuoteList quotes={DUMMY_QUOTES}/>)
};
export default AllQuotes;
