import React from 'react';


class MediaList extends React.Component{
  render(){
    const name = this.props.name;
    return(
      <div>
    <h1>{name}</h1>
    </div>
    );
  }
}

export default MediaList;