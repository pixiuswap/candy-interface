import ERC20_INTERFACE from 'constants/abis/erc20'
import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import priceContracts from 'constants/candyPriceContracts'
import { useMulticallContract } from './useContract'


type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_BNB: string
    }
  }
}

const api = 'https://api.pancakeswap.info/api/tokens'

const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)

  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (multicallContract){
          const {candyAddress, busdAddress, bnbAddress, candyBnbLpAddress, busdBnbLpAddress} = priceContracts;
          const calls = [
            [candyAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [candyBnbLpAddress])],
            [bnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [candyBnbLpAddress])],
            [busdAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [busdBnbLpAddress])],
            [bnbAddress, ERC20_INTERFACE.encodeFunctionData("balanceOf", [busdBnbLpAddress])],
          ];

          const [resultsBlockNumber, result] = await multicallContract.aggregate(calls);
          const [pornAmount, bnbAmount1, busdAmount, bnbAmount2] = result.map(r=>ERC20_INTERFACE.decodeFunctionResult("balanceOf", r));
          const porn = new BigNumber(pornAmount);
          const bnb1 = new BigNumber(bnbAmount1);
          const busd = new BigNumber(busdAmount);
          const bnb2 = new BigNumber(bnbAmount2);
          const pornPrice = bnb1.div(porn).multipliedBy(busd.div(bnb2)).toNumber();
          setData(pornPrice)
        }
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [multicallContract])

  return data
}

export default useGetPriceData
