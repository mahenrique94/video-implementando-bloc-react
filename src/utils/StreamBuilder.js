import { useEffect, useState } from 'react'
import {AsyncSnapshot} from './AsyncSnapshot'

const StreamBuilder = ({ initialData, stream, builder }) => {
  const [snapshot, updateSnapshot] = useState(new AsyncSnapshot(initialData))

  useEffect(() => {
    stream.subscribe(
      data => updateSnapshot(new AsyncSnapshot(data)),
      error => updateSnapshot(new AsyncSnapshot(null, error))
    )
    return () => stream.unsubscribe()
  }, [stream])

  return builder(snapshot)
}

export default StreamBuilder
