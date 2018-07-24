import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//components
import Title from "./component/title";
import Form from "./component/form";
import BankDetail from "./component/BankDetail";
import TableHead from "./component/tableHead";

class App extends Component {
    state ={
        dataSet:[]
    }

    getDetail = async (e) =>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        console.log(city)
        const api_call = await fetch(`https://app.fyle.in/api/bank_branches?city=${city}&offset=0&limit=50`);
        const data = await api_call.json();
        if(city){
            this.setState({dataSet:data});
        }
    }

    render() {

    return (
        <div className="container mt-5">
         <div className="row">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
                <Title/><br/>
                <Form getDetail ={ this.getDetail }/>
                <br/>
                <br/>
            </div>
            <div className="col-md-12">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                    <TableHead/>
                    </thead>        
                    <tbody>
                        {this.state.dataSet.map((row) => <BankDetail  
                        data = {row}/>)}
                    </tbody>
                </table>
            </div>
         </div>
        </div>
    );
  }
}

export default App;