import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';
import {postCommentRequested} from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: ({author, text}) => {
    dispatch(postCommentRequested({author, text}));
    // Automatically change location to /comments after submitting a comment
    ownProps.history.push('/comments');
  }
});

const mapStateToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
