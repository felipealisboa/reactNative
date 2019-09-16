import React, { Component } from "react";

class TimerCountdown extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            millisecondsRemaining: this.props.initialMilliseconds,
            timeoutId: undefined,
            previousMilliseconds: undefined,
            this.state = {
              hours_Counter:'00',
              minutes_Counter: '00',
              seconds_Counter: '00',
              startDisable: false
            }
            this.startStopTimer = this.startStopTimer.bind(this);
            this.resetTimer = this.resetTimer.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.reset = this.reset.bind(this);

        };

        this.tick = () => {
            const currentMilliseconds = Date.now();
            const dt = this.state.previousMilliseconds
                ? currentMilliseconds - this.state.previousMilliseconds
                : 0;
            const interval = 1000;
            const intervalSecondsRemaing = interval - (dt % interval);
            let timeout = intervalSecondsRemaing;
            if (intervalSecondsRemaing < interval / 2.0) {
                timeout += interval;
            }
            const millisecondsRemaining = Math.max(this.state.millisecondsRemaining - dt, 0);
            const isComplete = this.state.previousMilliseconds && millisecondsRemaining <= 0;
            if (this.state.timeoutId !== undefined) {
                clearTimeout(this.state.timeoutId);
            }
            this.setState({
                timeoutId: isComplete ? undefined : setTimeout(this.tick, timeout),
                previousMilliseconds: currentMilliseconds,
                millisecondsRemaining
            });
            if (isComplete) {
                if (this.props.onExpire) {
                    this.props.onExpire();
                }
                return;
            }
            if (this.props.onTick !== undefined) {
                this.props.onTick(millisecondsRemaining);
            }
        };
        this.getFormattedTime = (milliseconds) => {
            if (this.props.formatMilliseconds !== undefined) {
                return this.props.formatMilliseconds(milliseconds);
            }
            const remainingSec = Math.round(milliseconds / 1000);
            const seconds = parseInt((remainingSec % 60).toString(), 10);
            const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
            const hours = parseInt((remainingSec / 3600).toString(), 10);
            const s = seconds < 10 ? '0' + seconds : seconds;
            const m = minutes < 10 ? '0' + minutes : minutes;
            let h = hours < 10 ? '0' + hours : hours;
            h = h === '00' ? '' : h + ':';
            return h + m + ':' + s;
        };
    }
    componentDidMount() {
        this.tick();
    }
    componentWillReceiveProps(newProps) {
        if (this.state.timeoutId !== undefined) {
            clearTimeout(this.state.timeoutId);
        }
        this.setState({
            previousMilliseconds: undefined,
            millisecondsRemaining: newProps.initialMilliseconds
        });
    }
    componentDidUpdate() {
        if (!this.state.previousMilliseconds && this.state.millisecondsRemaining > 0) {
            this.tick();
        }
    }
    componentWillUnmount() {
        clearTimeout(this.state.timeoutId);
    }
    render() {
        const millisecondsRemaining = this.state.millisecondsRemaining;
        const allowFontScaling = this.props.allowFontScaling;
        const style = this.props.style;
        return (<react_native_1.Text allowFontScaling={allowFontScaling} style={style}>
        {this.getFormattedTime(millisecondsRemaining)}
      </react_native_1.Text>);
    }
}
TimerCountdown.defaultProps = {
    formatMilliseconds: undefined,
    onTick: undefined,
    onExpire: undefined
};
