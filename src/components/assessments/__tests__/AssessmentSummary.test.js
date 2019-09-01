import React from 'react'
import { render } from '@testing-library/react'
import AssessmentSummary from '../AssessmentSummary'
import moment from 'moment'

describe('Assessment Summary', () => {
    test('it renders the first name, last name, comment, coach name and post time', () => {
        
        expect(false).toBeTruthy()
        //Arrange
        const props = {
            assessment: {
                firstName: 'Jonathan',
                lastName: 'Smith',
                comment: 'Be sure to practice more',
                coachFirstName: 'Pam',
                coachLastName: 'Hardy',
                createdAt: 1567261076
            }
        }

        //Act
        
        // const { getByText } = render(<AssessmentSummary {...props} />)

        // //Assert
        // const nameNode = getByText(`Assessment for ${props.assessment.firstName} ${props.assessment.lastName}`)
        // const commentNode = getByText(props.assessment.comment)
        // const coachNode = getByText(`Posted by ${props.coachFirstName} ${props.coachLastName}`)
        // const timestampNode = getByText(moment(props.createdAt).fromNow())

        // expect(nameNode).toBeDefined()
        // expect(commentNode).toBeDefined()
        // expect(coachNode).toBeDefined()
        // expect(timestampNode).toBeDefined()
    })
})