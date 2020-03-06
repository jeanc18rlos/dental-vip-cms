import React from "react";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Pagination from "../components/Pagination";
import SideBar from "../components/DV-BlogSidebar";
import * as _ from "lodash"

const searchByText = (collection, text, exclude) => {
  text = _.toLower(text);
  return _.filter(collection, function(object) {
    return _(object.node).omit(exclude).some(function(string) {
      return _(string).toLower().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(text);
    });
  });
}

class BlogRoll extends React.Component {
  constructor(props) {
    super(props);

    // an example array of items to be paged
    let exampleItems =  this.props.data.posts.edges ;

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  componentDidMount(){
    this.props.query && this.setState({
      exampleItems:  searchByText(this.props.data.posts.edges, this.props.query.substr(6))
    })
  }
  render() {
    const { data } = this.props;

    return [
      <div className="col-xs-12 col-md-8 col-lg-9" style={{ padding: 0 }}>
        <div className="row col-md-12 columns is-multiline">
          {this.state.pageOfItems.map(({ node: post }) => (
            <div className="col-md-12 col-lg-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <br />
                    <span className="subtitle is-size-5 is-block">
                      {data.home.frontmatter.structure.post.by}{" "}
                      {post.frontmatter.author.name} | {post.frontmatter.date} |{" "}
                      {post.frontmatter.tags}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    {data.home.frontmatter.structure.post.readMore}
                  </Link>
                </p>
              </article>
            </div>
          ))}
        </div>
        <Pagination
          items={this.state.exampleItems}
          onChangePage={this.onChangePage}
        />
      </div>,
      <SideBar
        structure={data.home.frontmatter.structure}
        language={data.home.frontmatter.language}
        categories={data.categories}
        latestPosts={data.latestPosts}
      />
    ];
  }
}

export default BlogRoll;
