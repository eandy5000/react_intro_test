import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box' 


describe('testing CommentBox component', function(){
    let component

    beforeEach(() => {
        component = renderComponent(CommentBox)
    })

    it('has text area', () => {
        expect(component.find('textarea')).to.exist
    })

    it('has a button', () => {
        expect(component.find('button')).to.exist
    })

    it('has comment-box class', () => {
        expect(component).to.have.class('comment-box')
    })

    describe('textbox functions', () => {
        
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment')
        })

        it('shows text that is entered', () => {
            expect(component.find('textarea')).to.have.value('new comment')
        })
        it('when submitted text clears', () => {
            
        })
    })


})