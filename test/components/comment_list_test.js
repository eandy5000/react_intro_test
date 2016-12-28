import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'


describe('testing comment list', () => {
    let component;
    const props = {
        comments: [
            'first', 'second', 'third'
        ]
    }

    beforeEach(() => {
        component = renderComponent(CommentList, null, props)
    })
    it('shows an li for each comment', () => {
        expect(component.find('li').length).to.equal(3)
    })
    it('shows each comment in the list', () => {
        expect(component).to.contain('first')
        expect(component).to.contain('second')
        expect(component).to.contain('third')
    })
})