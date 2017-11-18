import React from 'react';

class ExampleWorkModal extends React.Component {

  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';
    let embeds = [];
    for (var i = 0; i < example.embed.length; i++) {
        embeds.push(
          <iframe width="560"
            height="315"
            src={ example.embed[i] }
            frameborder="0"
            allowfullscreen>
          </iframe>
        )
      }

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
          { embeds }

          <p className="modal__description">
            { example.desc }
          </p>
        </div>
      </div>
    )
  }
}

export default ExampleWorkModal;