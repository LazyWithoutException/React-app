import React from 'react';
// Import Datepicker
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {fetchDataAction,dateAction} from '../store/actions/index'

// Import the default style
import 'rc-datepicker/lib/style.css';

 class TimePicker extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedDate: new Date()
        };
       
    }
    componentDidMount(){
        this.onChange = this.onChange.bind(this);
        this.onClick= this.onClick.bind(this);
    }
    onChange(date) {
		this.setState({
			selectedDate: date
        });
       
    }
    onClick(){
        console.log(this.state)
        let datum=this.state.selectedDate.getMonth()+1+"/"+this.state.selectedDate.getDate()+"/"+this.state.selectedDate.getFullYear()
        this.props.dateAction(datum)
        this.props.fetchDataAction(datum);
        console.log("stanje posle klika na datum ")
        console.log(this.props.store.getState())
    }
    render() {
        return (
            <div id="datepicker">
                <DatePickerInput
                        
                    onChange={this.onChange}
                    value={this.state.selectedDate}
                    className='my-custom-datepicker-component'
                />
                <DatePicker onClick={this.onClick}  onChange={this.onChange} value={this.state.selectedDate} />
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.onClick}>Pick Date And Go</button>

            </div>
        );
    }
}

const mapStateToProps =(state) => ({
    dateReducer: state.tempDate.date
  });

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDataAction ,dateAction}, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(TimePicker)