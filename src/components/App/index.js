import React from 'react';
import './App.scss';
import Step from '../Step/';
import CardForm from '../CardForm/';
import PersonalForm from '../PersonalForm';
import img from './img/image_test.jpg';

class App extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
  };

  handleClickNextForm = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };

  handleTabClick = number => {
    this.setState({
      step: +number,
    });
  };

  handleChangeForm = (propName, prop) => {
    if (propName && prop) {
      this.setState({
        [propName]: prop
      });
    }
  };

  isFormCommitable = () => {
      const { step, firstName, lastName, email, cardNumber } = this.state;

      switch (step) {
        case 1:
            if (firstName !== '' && lastName !== '' && email !== '' && email.includes('@')) {
                return true;
            };
            break;
        case 2:
            if (cardNumber.length === 16) {
                return true;
            }
            break;
        default:
            return false;
      }
  }

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
        case 1:
            return (
              <PersonalForm 
                firstName={firstName}
                lastName={lastName}
                email={email}
                onChangeForm={this.handleChangeForm}
              />)
        case 2:
            return (
              <CardForm
                cardNumber={cardNumber}
                onChangeForm={this.handleChangeForm}
                onChangeTimeOver={this.handleChangeTimeOver}
              />)
        case 3:
            return <p data-test="congratulations">Поздравляем!</p>;
        default:
            return;
    }
  }

  render() {
    const { step } = this.state;
    return <div className="container">
        <div className="tab-panel">
          <Step 
            onClick={this.handleTabClick} 
            number="1" 
            children="Personal information" 
            isSelected={step === 1} 
            isClickable={step !== 1} 
          />
          <Step
            onClick={this.handleTabClick}
            number="2" children="Card inform"
            isSelected={step === 2}
            isClickable={step === 3}
          />
          <Step 
            onClick={this.handleTabClick}
            number="3"
            children="Finish"
            isSelected={step === 3}
            isClickable={false}
          />
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      <img src={img} alt=""/>
      </div>;
  }
}

export default App;
