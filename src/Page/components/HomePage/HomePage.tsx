import React from 'react'
import { FormCategory } from '../formCategory/FormCategory'
import { FormStorage } from '../Form_Kho/FormStorage'
import { FormPrice } from '../form_price/FormPrice'
import { Box, Button } from '@mui/material'

export const HomePage = () => {
  return (
    <div>
        <div>
           <FormCategory/>
           <FormStorage/>
           <FormPrice/>
        </div>
        <Box>
        <Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>

        </Box>
    </div>
  )
}
