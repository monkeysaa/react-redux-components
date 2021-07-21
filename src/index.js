import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.jsx';
import faker from 'faker';

const App = () => {
    return (
      <div className="ui container comments">
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45PM" 
          text="Nice blog post!" 
          img={faker.image.avatar()}
        />
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:00AM" 
          text="You suck" 
          img={faker.image.avatar()}
        />
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 5:00PM" 
          text="Yaaasss!!!!" 
          img={faker.image.avatar()}
        />
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))