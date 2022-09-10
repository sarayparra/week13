constructor(props) {
    super(props);
    this.weightChange = this.weightChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
}

weightChanged(weightValue) {
    this.setState({ weight : weightValue });
}

heightChanged(heightValue) {
    this.setState({ height:  heightValue });
}
computeBmi() {
    let bmiValue = ( this.state.weight / this.state.height) / this.state.height;
    this.setState({ bmi : bmiValue });
    let bmiClass = this.getBmi(bmiValue);
    this.setState({ bmiClass : bmiClass });
}
getBmi(bmi) {
    if(bmi < 18.5) {
        return "Underweight";
    }
    if(bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    }
    if(bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    }
    if(bmi >= 30) {
        return "Obesity";
    }
}


