import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>Oops! Something went wrong.</h1>
        <h2>Please try again later.</h2>
        <h3>{err.status + " : " + err.statusText}</h3>
    </div>
  )
}

export default Error;
