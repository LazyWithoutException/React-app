import React from 'react';

// Import Datepicker
import { DatePicker, DatePickerInput } from 'rc-datepicker';

// Import the default style
import 'rc-datepicker/lib/style.css';
 
export default class TimePicker extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedDate: new Date()
        };

        this.onChange = this.onChange.bind(this);
         this.onClick= this.onClick.bind(this);
    }

    onChange(date) {
		this.setState({
			selectedDate: date
		});
	}
    onClick(event){
        console.log(this.state.selectedDate);

    }
    render() {
        return (
            <div>
                <DatePickerInput
                    onChange={this.onChange}
                    value={this.state.selectedDate}
                    className='my-custom-datepicker-component'
                />
                <DatePicker onChange={this.onChange} value={this.state.selectedDate} />
                <button type="button" className="btn btn-primary btn-sm"onClick={this.onClick}>Go</button>

            </div>
        );
    }
}