import { useState, useCallback } from "react";
import useHttp from "../../hooks/use-http";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getAllComments } from "../../lib/api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, data, status } = useHttp(getAllComments, true);

  const { quoteId } = useParams();

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const doneAddCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onDoneAddComment={doneAddCommentHandler} />
      )}
      {status === "completed" && <CommentsList comments={data} />}
    </section>
  );
};

export default Comments;
