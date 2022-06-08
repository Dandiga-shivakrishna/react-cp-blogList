import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <div className="blog-list-container">
        {blogsList.map(item => (
          <BlogItem blogData={item} key={item.id} />
        ))}
      </div>
    )
  }
}

export default BlogsList
