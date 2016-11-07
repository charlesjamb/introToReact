const React = require('react');

const ImageCaption = require('./ImageCaption');
const Layout = require('./Layout');
const GuessTheNumber = require('./GuessTheNumber');

let imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

const App = React.createClass({
  _renderImage: function(arr) {
	return (<div>
	{
		arr.map(item => <ImageCaption key={item.id} source={item.source} text={item.text}/>)
	}
	</div>);
  },
  render: function() {
    return (
      <main>
        <h1>My first React App</h1>
        <hr/>
        <h2>Testing Layout</h2>
        <Layout>
        	<GuessTheNumber numberToGuess={50}/>
        	<br/>
        </Layout>
      </main>
    );
  }
});

module.exports = App;