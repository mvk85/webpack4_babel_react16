import React from 'react';
import './CardForm.css';
import Title from '../Title/';

class CardForm extends React.Component {
    handleChangeForm = (e) => {
        const { name, value } = e.target;

        this.props.onChangeForm(name, value);
    }

    componentWillUnmount() {

    }

    render() {
        const { cardNumber } = this.props;
        return (
            <div>
                <Title title='Номер карты'/>
                <div className='card-form' data-test='card-form'>
                    <input
                        type='text'
                        name='cardNumber'
                        onChange={this.handleChangeForm}
                        placeholder='0000000000000000'
                        value={cardNumber}
                    />
                </div>
            </div>
        )
    }
}

export default CardForm;