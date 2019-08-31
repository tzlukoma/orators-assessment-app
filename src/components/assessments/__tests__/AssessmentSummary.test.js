import React from 'react'
import { render } from '@testing-library/react'
import AssessmentSummary from '../AssessmentSummary'
import moment from 'moment'

describe('Assessment Summary', () => {
    test('it renders the first name, last name, comment, coach name and post time', () => {

        //Arrange
        const props = {
            assessment: {
                firstName: 'Jonathan',
                lastName: 'Smith',
                comment: 'Be sure to practice more',
                coachFirstName: 'Pam',
                coachLastName: 'Hardy',
                createdAt: 1567259148
            }
        }

        //Act
        const { getByText } = render(<AssessmentSummary {...props} />)

        //Assert
        const nameNode = getByText(`${props.assessment.firstName} ${props.assessment.lastName}`)
        const commentNode = getByText(props.assessment.comment)
        const coachNode = getByText(`${props.assessment.coachFirstName} ${props.assessment.coachLastName}`)
        const timestampNode = getByText(moment(props.assessment.createdAt.toDate()).fromNow())

        expect(nameNode).toBeDefined()
        expect(commentNode).toBeDefined()
        expect(coachNode).toBeDefined()
        expect(timestampNode).toBeDefined()
    })
})