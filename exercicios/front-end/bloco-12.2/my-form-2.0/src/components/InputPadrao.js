import React from 'react';

class InputPadrao extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
    }
  }
  render(){
    const { name, adress, value, city, estado } = this.props;
    return (

      <form>
        <fieldset>
          <label htmlFor={name}>
            <input type={name} id={name} value={value} name={name} />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default InputPadrao;