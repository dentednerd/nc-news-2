import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ArticleCard from '../molecules/ArticleCard';
import WhiteTitle from '../atoms/WhiteTitle';
import * as actions from '../../actions/actions';

class TopicPage extends React.Component {
  componentDidMount () {
    this.props.fetchArticlesByTopic(this.props.match.params.topic_id);
  }

  render () {
    if (!this.props.articlesByTopic) return <p>No articles!</p>;
    return (
      <div>
        <WhiteTitle>{this.props.match.params.topic_id}</WhiteTitle>
        {this.props.articlesByTopic.map(article => <ArticleCard key={article.article_id} article={article} />)}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticlesByTopic: (topic) => {
      dispatch(actions.fetchArticlesByTopic(topic));
    }
  };
}

function MapStateToProps (state) {
  return {
    articlesByTopic: state.articles,
    loading: state.loading
  };
}

TopicPage.propTypes = {
  fetchArticlesByTopic:PropTypes.func.isRequired,
  articlesByTopic:PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(MapStateToProps, mapDispatchToProps) (TopicPage);
