import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import OratorList from '../OratorList'


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
                id: 3,
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
        
        const nameNode = getByText(`${orator1.firstName} ${orator1.lastName}`)
        const parentNode = getAllByText(`${orator1.parentName}'s Family`)

        expect(nameNode).toBeDefined()
        expect(parentNode).toBeDefined()


    })
})