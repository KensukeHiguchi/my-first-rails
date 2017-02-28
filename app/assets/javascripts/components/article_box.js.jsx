var ArticleBox = React.createClass({
  render: function() {
    return (
      <div className="articleBox">
        <h1>Articles</h1>
        <ArticleList data={this.props.data}/>
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
        Hello, world! I am a ArticleForm.
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