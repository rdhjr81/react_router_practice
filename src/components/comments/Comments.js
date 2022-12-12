import { useEffect, useState, useCallback } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = (props) => {
  const {quoteId} = props;
  const [isAddingComment, setIsAddingComment] = useState(false);

  const {sendRequest, data: loadedComments, error, status} = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest,quoteId]);

  useEffect(() =>{
    sendRequest(quoteId);
  },[quoteId, sendRequest]);

  let comments;
  if(status === 'pending'){
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }


  if(status === 'completed' && loadedComments && loadedComments.length > 0){
    comments = <CommentsList comments={loadedComments} />;
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p className='centered'>No comments have been added</p>
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={props.quoteId} onAddedComment={addedCommentHandler}/>}
      {comments}
    </section>
  );
};

export default Comments;
