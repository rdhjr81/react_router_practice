import { useParams } from "react-router-dom";

const QuoteDetail = () => {
    const params = useParams();
    return <h1>Quotes Detail Page for id {params.quoteId}</h1>;
}
export default QuoteDetail;