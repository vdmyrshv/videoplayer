import {useEffect, useRef} from 'react'


const useEffectAfterMount = (cb, deps) => {
    const componentJustMounted = useRef(true)
    useEffect(() => {
      if (!componentJustMounted.current) {
        return cb()
      }
      componentJustMounted.current = false
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
  }

  export default useEffectAfterMount