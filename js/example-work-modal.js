import React from 'react';

class ModalVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'video': null
    };
  }
  componentWillMount() {
    this.setState({'video': this.props.video})
  }
  render() {
    return (
      <iframe
        src={ this.state.video }
        frameborder="0"
        allowfullscreen
        className="youtube-video">
      </iframe>
    )
  }
}

class ExampleWorkModal extends React.Component {
  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--darkBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
        <img alt={ example.image.desc }
             className="modal__image"
             src={ example.image.src  } />
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            { example.title }
          </h2>
          <h6>
            -- { example.subtitle }
          </h6>
          { example.embed.map( (video, idx) => {
              return (
                <ModalVideo video={video} key={"video" + idx} />
              )
            })
          }

          <p className="modal__description">
            { example.desc }
          </p>
        </div>
      </div>
    )
  }
}

export default ExampleWorkModal;
