import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box' 


describe('testing CommentBox component', function(){

    beforeEach(() => {
        const component = renderComponent(CommentBox)
    })

    it('has text area', () => {
        const component = renderComponent(CommentBox)
        expect(component.find('textarea')).to.exist
    })

    it('has a button', () => {
        const component =renderComponent(CommentBox)
        expect(component.find('button')).to.exist
    })

    it('has comment-box class', () => {
        const component = renderComponent(CommentBox)
        expect(component).to.have.class('comment-box')
    })

})