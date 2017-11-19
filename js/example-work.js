import React from 'react';
import ExampleWorkModal from './example-work-modal';
class ExampleWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'modalOpen': false,
      'selectedExample': null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }
  render() {
    let modal = this.state.modalOpen ?
        <ExampleWorkModal example={this.state.selectedExample}
          open={this.state.modalOpen}
          closeModal={this.closeModal}/> :
        <div></div>
    return (
      <span>
        <section className="section section--alignCentered section--description">
          { this.props.work.map( (example, idx) => {
              return (
                <ExampleWorkBubble example={example} key={idx}
                  openModal={this.openModal}/>
              )
            })
          }
        </section>
        { modal }
      </span>
    )
  }
}


class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example;
    return (
      <div className="section__exampleWrapper"
        onClick={ (evt) => this.props.openModal(evt, example) }>
        <div className="section__example">
          <img alt={ example.image.desc }
               className="section__exampleImage"
               src={ example.image.src }/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              { example.title }
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}
export default ExampleWork;
