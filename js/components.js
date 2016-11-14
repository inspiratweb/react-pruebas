class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        { id: 1, author: 'First comment!', body: 'content for first comment' },
        { id: 2, author: 'Second comment!', body: 'content for second comment' }
      ]
    }
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show comments';

    if (this.state.showComments) {
      buttonText = 'Hide comments';
      // add code for displaying comments
      commentNodes = <div>{comments}</div>;
    }

    return (
      <section>
        <h3>Comment box</h3>
        <CommentForm addComment={this._addComment.bind(this)} />
        <p>{this._getCommentsTitle(comments.length)}</p>
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {commentNodes}
      </section>
    );
  }

  _getComments() {
    return this.state.comments.map((comment)=> {
      return (
        <Comment 
          author = {comment.author} 
          body = {comment.body}
          key = {comment.id} />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment'
    } else {
      return `${commentCount} comments`;
    }
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author, 
      body
    };

    // if comments are hidden we must show them
    this.setState({
      comments: this.state.comments.concat([comment]),
      showComments: true
    });
  }
}

class Comment extends React.Component {
	render() {
		return (
      <article>
        <h3 className="comment-title">
          {this.props.author}
        </h3>
        <p className="comment-body">
          {this.props.body}
        </p>
      </article>
    );
	}
}

class CommentForm extends React.Component {
  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div>
          <input type="text" placeholder="Name:" ref={(input) => this._author = input} />
          <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div>
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    let author = this._author;
    let body = this._body;

    this.props.addComment(author.value, body.value);
  }
}

ReactDOM.render(
	<CommentBox />, document.getElementById('story-app')
);
