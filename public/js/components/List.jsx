var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function(){
    return (
        <div className="list">
          <h1>List Header</h1>
          <ul className="list">
            {this.props.items.map(function(item){
              return <li><ListItem item={item} key={item["App ID"]}/></li>
            })}
          </ul>
        </div>
      )
  }
});

module.exports = List;
