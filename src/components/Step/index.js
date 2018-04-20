import React from 'react';
import classNames from 'classnames';
import './Step.css';

class Step extends React.Component {
    handleClick = () => {
        const { onClick, number, isClickable } = this.props;
        if (isClickable) {
            onClick(number);
        }
    }

    render () {
        const { number, children, isSelected, isClickable } = this.props;
        const stepClass = classNames({
            'step': true,
            'step-selected': isSelected,
            'step-clickable': isClickable
        })

        return (
            <div onClick={this.handleClick} className={stepClass}>
                <p className="step__number">{number}</p>
                <p className="step__title">{children}</p>
            </div>
        )
    }
}

export default Step;