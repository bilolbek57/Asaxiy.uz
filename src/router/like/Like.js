import React from 'react'
import { useSelector } from 'react-redux'
function Like() {
  const like = useSelector(s => s.heart)

  return (
<div>

</div>
    )
}

export default Like