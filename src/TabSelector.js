import React from 'react';

class TabSelector extends React.Component {


  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChange}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChange}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChange}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
