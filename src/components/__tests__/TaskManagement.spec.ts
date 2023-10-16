import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TaskManagement from '@components/tasks/TaskManagement.vue'

describe('TaskManagement', () => {
  it('renders properly', () => {
    const wrapper = mount(TaskManagement)
    expect(wrapper.text()).toContain('Tasks')
  })
})
