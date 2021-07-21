import React from 'react';

const CommentDetail = (props) => {
  return(
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.img}/>
        {/* In faker library, avatar listed under image. Thus, faker.image.avatar(). 
        For more info, see https://github.com/marak/Faker.js/ */}
      </a>
      <div className="content">
        <a href="/" className="author">
            {props.author}
        </a>
        <div className="metadata">
            <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );

};

export default CommentDetail;