import React, { useContext } from 'react'
import { userContext } from '../../storage/userContext'

function UserMenu() {
    //3 usar el context
    const context = useContext(userContext)
    console.log(context)
    return (
    <>
        <p>
            Usuario:{context.user}
        </p>
    </>
  )
}

export default UserMenu