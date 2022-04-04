import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Card from '../components/Card.vue';
// import User from '../types/User';

describe('Card', () => {
    it('should render', async () => {
        const wrapper = mount(Card, {
        props: {
            query: 'test',
            user: {
                name: 'test',
                title: 'test',
                avatar: 'test',
               email: 'test',
            }

        }
        })
    
        expect(wrapper.find('.card').exists()).toBe(true)
    })
    })