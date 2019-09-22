import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import OratorList from '../OratorList'
import moment from 'moment'


describe('Orator List', () => {
    test('it renders a list of orator cards with their first name, last name, age and parent of the orator', async () => {
        
        //Arrange
        const orator1 = {
                id: 1,
                firstName: 'Jonathan',
                lastName: 'Smith',
                dateOfBirth: '2005-09-24',
                parentName: 'Denise Smith'
        }
        const orator2 = {
                id: 2,
                firstName: 'Amy',
                lastName: 'Smith',
                dateOfBirth: '2007-01-15',
                parentName: 'Denise Smith'
        }
        const orator3 = {
                id: 4,
                firstName: 'Susan',
                lastName: 'Smith',
                dateOfBirth: '2011-06-06',
                parentName: 'Denise Smith'
        }

        const props = [orator1, orator2, orator3]

        //Act
        const {getByText, getAllByText} = render(<BrowserRouter>
                                        <OratorList orators={props} />
                                    </BrowserRouter>)


        //Assert
        
        const nameNode1 = getByText(`${orator1.firstName} ${orator1.lastName}`)
        const dobNode1 = getByText(`${moment().diff(orator1.dateOfBirth, 'years', false)} years old`)
        const parentNode1 = getAllByText(`${orator1.parentName}'s Family`)

        expect(nameNode1).toBeDefined()
        expect(dobNode1).toBeDefined()
        expect(parentNode1).toBeDefined()

        const nameNode2 = getByText(`${orator2.firstName} ${orator2.lastName}`)
        const dobNode2 = getByText(`${moment().diff(orator1.dateOfBirth, 'years', false)} years old`)
        const parentNode2 = getAllByText(`${orator1.parentName}'s Family`)

        expect(nameNode2).toBeDefined()
        expect(dobNode2).toBeDefined()
        expect(parentNode2).toBeDefined()

        const nameNode3 = getByText(`${orator3.firstName} ${orator3.lastName}`)
        const dobNode3 = getByText(`${moment().diff(orator3.dateOfBirth, 'years', false)} years old`)
        const parentNode3 = getAllByText(`${orator1.parentName}'s Family`)

        expect(nameNode3).toBeDefined()
        expect(dobNode3).toBeDefined()
        expect(parentNode3).toBeDefined()


    })
})