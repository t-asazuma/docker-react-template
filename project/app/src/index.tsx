import React, { FC, StrictMode } from 'react'
import ReactDOM from "react-dom"

const Index: FC = () => {
  return (
    <StrictMode>
      test
    </StrictMode>
  )
}
ReactDOM.render(
  <Index />,
  document.getElementById("content-wrapper")
)