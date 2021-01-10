import React from 'react'
import {render} from 'react-native-testing-library'
import {SearchButton} from '../../../src/components/atoms/SearchButton'

describe('SearchButton ', () => {
    it('should be found', () => {
        const $root = render(
            <SearchButton testId="2" title="testTitle"/>
        )
        $root.getAllByTestId("2")
    });
});