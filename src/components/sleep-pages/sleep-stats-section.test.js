import React from 'react';
import ReactDOM from 'react-dom';
import {SleepStatsSection} from './sleep-stats-section';
import {shallow} from 'enzyme';

describe('<SleepStatsSection />', () => {
  const sleep1 = {
    awakeTime: "22:00",
    alarm: false,
    bedTime:  "08:00",
    blueLight:  false,
    caffeine:  10,
    date:  "Jan 01 2017",
    exercise:  false,
    hours:  0,
    id:  "123",
    moodAtSleep:  5,
    moodAtWake: 5
  };
  it('Renders without crashing', () => {
    shallow(<SleepStatsSection sleeps={[]} />);
  });
  it('Renders a line of text if there are no nights of sleep', () => {
    const wrapper = shallow(<SleepStatsSection sleeps={[]} />);
    const text = wrapper.find('#stats .no-sleep');
    expect(text.text()).toEqual('No previous nights of sleep have been recorded!');
  });
  it('Renders stats if there is one or more nights of sleep', () => {
    const wrapper = shallow(<SleepStatsSection sleeps={[sleep1]} />);
    const percentageBarTitle = wrapper.find('#stats h2');
    expect(percentageBarTitle.text()).toEqual('Positive Wake Percentage');
  });
});