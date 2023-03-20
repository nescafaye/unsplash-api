import * as yup from "yup";

import React from 'react'

const searchSchema = yup.object().shape({
    search: yup.required("This is required.")
}) 


export default searchSchema