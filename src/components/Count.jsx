import React from 'react'
import { observer, inject } from 'mobx-react'
import { Box } from '@mui/material'
const Count = inject('countStore')(
    observer(({ countStore }) => {
        const onIncrement = () => {
            countStore.increment()
        }
        const onDecrement = () => {
            countStore.decrement()
        }
        return (
            <Box display='flex' alignItems='center' gap={3}>
                <h2 onClick={onDecrement}>-</h2>
                <h1>{countStore.count}</h1>
                <h2 onClick={onIncrement}>+</h2>
            </Box>
        )
    }),
)

export default Count
