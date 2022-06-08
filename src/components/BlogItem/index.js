import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {title, description, publishedDate} = blogData

  return (
    <li className="suggestion-item">
      <div className="text-style">
        <h1 className="suggestion-text">{title}</h1>
        <p className="suggestion-text">{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
