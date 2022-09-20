import React from 'react'

export default function Errors({error}) {
        return (
            <ul>
                {error.map(function(error, index){
                    return <li key={ index }>{error.message}</li>;
                  })}
            </ul>
  )
}
