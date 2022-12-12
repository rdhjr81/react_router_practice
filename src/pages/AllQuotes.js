import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import {getAllQuotes} from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner'
import { useEffect } from 'react';

const AllQuotes = () => {
    const {sendRequest, status, data:loadedQuotes, error} = useHttp(getAllQuotes, true);

    useEffect(()=>{
      sendRequest();
    }, [sendRequest])

    if(status === 'pending'){
      return <div className='centered'>
        <LoadingSpinner />
      </div>
    }
    return (<QuoteList quotes={loadedQuotes}/>)
};
export default AllQuotes;
