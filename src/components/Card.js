import React from 'react'
import Headline from './Headline'
import CreditBox from './CreditBox'
import Message from './Message'

class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
    render() {
        return (
        <div>
            <section>
            <Headline headline={this.props.headline} />
            <CreditBox 
              name={this.props.name}  
              creditImageURL={this.props.url}  
            />
            </section>
            <Message 
            title={this.props.headline}
            message={this.props.message}
            url={this.props.url}
            urlDisplayName={this.props.urlDisplayName}
            />
        </div>
        );
      }
}

export default Card;