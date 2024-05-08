import {FallingLines} from 'react-loader-spinner'


const Loader = () => {
  return (
<div >
    <FallingLines
  color="rgb(99, 99, 141)"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
</div>
  )
}

export default Loader