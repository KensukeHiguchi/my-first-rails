var ArticleBox = React.createClass({
  getInitialState: function() {
      return {data: []};
    },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(result) {
        this.setState({data: result.articles});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="articleBox">
        <h1>Articles</h1>
        <ArticleList data={this.state.data}/>
        <ArticleForm />
      </div>
    );
  }
});

var ArticleList = React.createClass({
  render: function() {
    var articleNodes = this.props.data.map(function (article) {
      return (
        <Article title={article.title}>
          {article.text}
        </Article>
      );
    });
    return (
      <div className="articleList">
        {articleNodes}
      </div>
    );
  }
});

var ArticleForm = React.createClass({
  render: function() {
    return (
      <div className="articleForm">
        Hello, world! I am a articleForm.
      </div>
    );
  }
});

var Article = React.createClass({
  render: function() {
    return (
      <div className="article">
        <h2 className="articleTitle">
          {this.props.title}
        </h2>
        {this.props.children}
      </div>
    );
  }
});