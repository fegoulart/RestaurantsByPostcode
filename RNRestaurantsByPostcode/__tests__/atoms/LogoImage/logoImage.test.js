import React from 'react'
import {render} from 'react-native-testing-library'
import {LogoImage} from '../../../src/components/atoms/LogoImage'

describe('LogoImage ', () => {
    it('should be found', () => {
        const $root = render(
            <LogoImage testId="1"/>
        )
        $root.getAllByTestId("1")
    });
})


