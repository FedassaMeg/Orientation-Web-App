import React from 'react'

var Dialog = React.createClass({
    componentDidMount: function() {
        // ...
        // use `autoOpen` false so it doesn't automatically open and then
        // store the dialog on the component so we can use it elsewhere
        this.dialog = $(this.node).dialog({
          autoOpen: false,
          title: this.props.title,
          close: this.props.onClose
        }).data('ui-dialog');
        // ...
      },
    
      // ...
    
      renderDialogContent: function(props) {
        // ...
        React.renderComponent(<div>{props.children}</div>, this.node):
    
        // after we've rendered the dialog, now we can call methods on it
        // via the props passed in like
        // `<Dialog open={this.state.dialogIsOpen} />`
        if (props.open)
          this.dialog.open();
        else
          this.dialog.close();
      }

    componentWillUnmount: function() {
        React.unmountComponentAtNode(this.node);
        this.dialog.destroy();
      }
  });