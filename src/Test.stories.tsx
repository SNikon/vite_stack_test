
import { Meta } from '@storybook/react'
import { TestComponent } from "./Test"

export default {
    component: TestComponent,
    title: 'Test'
} as Meta

export const Basic = () => <TestComponent />