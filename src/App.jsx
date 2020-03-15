import React, {Component} from 'react';
import style from './index.css';
import path from 'path';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {},
      uploaded: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit () {
    event.preventDefault();
    let browser_file_path = document.getElementById("myfileid").value;
    browser_file_path = browser_file_path.slice(12,browser_file_path.length)
    browser_file_path = path.join(__dirname + browser_file_path);

    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ browser_file_path: browser_file_path})
  };
    try {
      const fetchResponse = await fetch('/bigram', settings);
      const data = await fetchResponse.json();
      console.log('this is data', data)
      this.setState({ uploaded: true })
      return data;
    } catch(e) {
      return e;
    }
}


  render (){
    let histogram;
    if (this.state.uploaded === true) {
      histogram = (<div>Hello</div>)
    }
  return (
    <div className="Bigram Parser">
      <header className="Bigram Parser">
        <div>
          <h1>Welcome GoHealth</h1>
          <p>Please import the desired file you'd like to test</p>
          <div className="upload-btn-wrapper">
            <button className="upload-btn">
              Import
            </button>
            <form onSubmit={this.handleSubmit}>
            <input type="file" id="myfileid" name="myfile" accept=".txt, .doc, .docx, .pdf"/>
            <input type="submit" value="Submit"></input>
            </form>
          </div>
          <div>
            {histogram}
          </div>
        </div>
      </header>
    </div>
  );
}
}

export default App;
