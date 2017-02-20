var React=require('react');

var EmailField=require('./EmailField.jsx');
var NameField=require('./NameField.jsx');

var LeadCapture= React.createClass(
    {
        onSubmit: function(){
            if(!this.refs.fieldEmail.state.valid){
                alert("You sook!")
            }
            else
            {
                var httpRequestsBody={
                    email: this.refs.fieldEmail.state.value,
                    firstName: this.refs.fieldName.state.value
                };
                console.log("We reached.");
                this.refs.fieldName.clear();
                this.refs.fieldEmail.clear();
            }




        },
        render: function () {

            return(
                <div className="col-sm-3">
                    <div className="panel panel-default">

                        <div className="panel-body">
                            <NameField type="First name" ref="fieldName"/>
                            <EmailField ref="fieldEmail"/>
                            <button type="btn btn-primary" onClick={this.onSubmit}>Submit </button>




                        </div>



                    </div>


                </div>
            )


        }
    }
);

module.exports=LeadCapture;