import React, { Component } from 'react';

import SidePanel from './components/SidePanel';
import WorkItem from './components/WorkItem'
import Footer from './components/Footer'

import getWorkItems from './Repo'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        workItems: []
    };
  }

  componentDidMount(){
      getWorkItems((data) => {
          this.setState({workItems:data})
      });
  }

  render() {

    var workItems;
    if(this.state.workItems.length > 0)
      workItems = this.state.workItems.map(data => {
        return <WorkItem data={data}/>
      });
    else 
      workItems = <div className="row"> <i className="col-sm-12 text-center fa fa-spinner fa-spin fa-4x"></i> </div>;

    return (
      <div>
          <nav className="navbar navbar-default hidden-sm hidden-md hidden-lg navbar-fixed-top">
            <div className="container-fluid">

            </div>
          </nav>

          <div className="container main-container">

              <div className="row">

                  <SidePanel/>

                  <div className="bottom-cta hidden-sm hidden-md hidden-lg text-center">
                    <div className="btn btn-success">Get in touch</div>
                  </div>


                  <div className="col-sm-9 col-sm-offset-3">

                    {workItems}
                    
                    <Footer/>
                  </div> 
                </div>

            </div>

      </div>

    );
  }
}

export default App;
