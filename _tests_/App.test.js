/**
* created by Hemadri Dasari on 01/05/2018
*/

import AdSlotsData from '../src/AdSlotsData/components/AdSlotsData';
import React from 'react';
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import renderer from 'react-test-renderer';
import adslotsData from '../public/adslotsData.json';
import { Provider } from "react-redux";
import store from '../src/store';

describe('AdSlotsData component renders a list of ad slots data', () => {
  
	it('should match its empty snapshot', () => {
	    const tree = renderer.create(
		      <Provider store={store}>
		      	<AdSlotsData />
		      </Provider>
	    ).toJSON();

	    expect(tree).toMatchSnapshot();
	  });

	it('should match its snapshot with items', () => {
	  const tree = renderer.create(
		  	<Provider store={store}>
		    	<AdSlotsData adslotsData={adslotsData} />
		    </Provider>
	   ).toJSON();

	  expect(tree).toMatchSnapshot();
	});
});