import React from 'react';
import { Link } from 'react-router-dom';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        this.nullState = {
            front_side: "",
            back_side: ""
        };
        this.state = this.nullState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const card = Object.assign({}, this.state);
        card.deck_id = this.props.deck.id;
        this.props.createCard(card).then(() => {
            this.props.history.push(`/decks/${this.props.deck.id}`);
        });
        this.setState(this.nullState);
    }

    handleClose(e) {
        // e.preventDefault();
        debugger;
        this.props.removeCardErrors();
        this.setState(this.nullState);
        const cardBg = document.querySelector('.card-modal-bg');
        cardBg.classList.remove('.bg-active');
        // let modalBg = document.querySelector('.modal-bg');
        // modalBg.classList.remove('bg-active');
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderCardErrors() {
        const errors = Object.values(this.props.cardErrors);
        return (
            <div>errors
                {errors}
            </div>
        )
    }

    render() {
        return (
        <div className="card-modal-bg">
            <div className="create-card-modal">
                <div className="card-creator">
                    <form onSubmit={this.handleSubmit} className="create-card-form">
                        <h2>Create a Card</h2>
                        <div className="create-card-fields">
                            <label>Key Term/Question
                                <input className="create-card-front" type="text" onChange={this.update('front_side')} 
                                placeholder="Who performed the hit song 'I Want it that Way?'" value={this.state.front_side}/>
                            </label>
                            <label>Definition/Answer
                                <input className="create-card-back" type="text" onChange={this.update('back_side')}
                                placeholder="The Backstreet Boys" value={this.state.back_side}/>
                            </label>
                            <button className="create-card-button" type="submit">Create</button>
                            <h3 className="card-errors">{this.renderCardErrors()}</h3>
                        </div>
                    </form>
                    <div className="create-card-close" onClick={this.handleClose}>×</div>
                    {/* <div className="create-card-close-button" onClick={this.handleClose}>×</div> */}
                </div>  
            </div>
        </div>
        )
    }
}

export default CreateCard;