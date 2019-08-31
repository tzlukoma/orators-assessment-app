import React from 'react'
import { render } from '@testing-library/react'
import OratorSummary from '../OratorSummary'
import moment from 'moment'

describe('Coment Card', () => {
    test('it renders the first name, last name, age and parent of the orator', () => {

        //Arrange
        const props = {
            orator: {
                firstName: 'Jonathan',
                lastName: 'Smith',
                dateOfBirth: '2005-09-24',
                parentName: 'Denise Smith'
            }
        }

        //Act
        const { getByText } = render(<OratorSummary {...props} />)

        //Assert
        const nameNode = getByText(`${props.orator.firstName} ${props.orator.lastName}`)
        const dobNode = getByText(`${moment().diff(props.orator.dateOfBirth, 'years', false)} years old`)
        const parentNode = getByText(`${props.orator.parentName}'s Family`)

        expect(nameNode).toBeDefined()
        expect(dobNode).toBeDefined()
        expect(parentNode).toBeDefined()
    })
})