import React from 'react';
import { UsersListButton } from '../users_list_button';
import { mount, shallow } from 'enzyme';


describe('Users list button', () => {

    it('button should render', () => {
        let shallowWrapper = shallow(<UsersListButton />);
        expect(shallowWrapper.find('button')).toHaveLength(1);
    });

    it('fetch action should dispatch when button is clicked', () => {
        let mockedFetchData = jest.fn();
        let mountedWrapper = mount(<UsersListButton fetchData={mockedFetchData} />);

        mountedWrapper.find('button').simulate('click');
        expect(mockedFetchData.mock.calls.length).toBe(1);
        mountedWrapper.find('button').simulate('click');
        expect(mockedFetchData.mock.calls.length).toBe(2);
    });

});
