import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import { Link } from "../routes";

export class portfolios extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (err) {
      console.log(err);
    }
    return { posts: posts.splice(0, 10) };
  }
  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link as={`/portfolio/${post.id}`} route={`/portfolio/${post.id}`}>
            <a style={{ fontSize: "20px" }}> {post.title} </a>
          </Link>
        </li>
      );
    });
  }
  render() {
    const { posts } = this.props;
    debugger;

    return (
      <BaseLayout>
        <h1>portfolios</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default portfolios;
