/* eslint-disable no-return-assign */
import { createAction, createReducer } from '@reduxjs/toolkit'

export const apiCallBegin = createAction('api/callBegin')
export const apiCallSuccess = createAction('api/callSuccess')
export const apiCallFailed = createAction('api/callFailed')

export const errorReducer = createReducer(0, (builder) => {
  builder.addCase(apiCallBegin, (state) => state = null)
  builder.addCase(apiCallFailed, (state, action) => state = action.payload)
  builder.addCase(apiCallSuccess, (state) => state = null)
})
