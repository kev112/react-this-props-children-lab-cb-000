import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    
    let childrenWithProps = React.Children.map(
      this.props.children, 
      child =>  { 
        return React.cloneElement(child, { className: 'heaven' });
      }
    );
    
    return (
      <div>
        {childrenWithProps}
      </div>
    )
  }
}   