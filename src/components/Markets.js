import { useSelector, useDispatch } from 'react-redux'

import config from '../config.json'

import { loadTokens } from '../store/interactions'


const Markets = () => {
    const provider = useSelector(state => state.provider.connection)
    const chainId = useSelector(state => state.provider.chainId)

    const dispatch = useDispatch()

    const marketHandler = async (e) => {
      loadTokens(provider, (e.target.value).split(','), dispatch)
    }
  

    return(
      <div className='component exchange__markets'>
        <div className='component__header'>
        <h2>Select Market</h2>
        </div>

        {chainId && config[chainId] ? (
        <select name="markets" id="markets" onChange={marketHandler}>
          <option value={`${config[chainId].JFA.address},${config[chainId].JFB.address}`}>JFA / JFB</option>
          <option value={`${config[chainId].JFA.address},${config[chainId].JFC.address}`}>JFA / JFC</option>
        </select>
      ) : (
        <div>
          <p>Not Deployed to Network</p>
        </div>
      )}

        <hr />
      </div>
    )
  }
  
  export default Markets;