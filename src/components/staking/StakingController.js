import BalanceStats from "./BalanceStats"
import StakingInputCard from './StakingInputCard'
import Loader from "react-loader-spinner"
const StakingController = ({
    tetherBalance,
    uridiumBalance,
    stakingBalance,
    loading_success,
    decentralBank,
    stakeTokens,
    unstakeTokens,
}) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-3xl mx-auto">
                <div className="bg-white overflow-hidden my-8 shadow-2xl rounded-lg divide-y divide-gray-200">
                    {loading_success ? 
                    <>
                    <div className="px-4 py-5 sm:px-6">
                            <BalanceStats 
                                tetherBalance={window.web3.utils.fromWei(tetherBalance, 'Ether')}
                                uridiumBalance={uridiumBalance }
                                stakingBalance={stakingBalance }
                            />
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <StakingInputCard 
                                stakeTokens={stakeTokens}
                                unstakeTokens={unstakeTokens}
                            />
                        </div>
                    </>:
                    <div className="animate-pulse p-2">
                    <div class="rounded w-full h-52 bg-gray-200"></div>
                    <div class="flex flex-col mt-5">
                        <div class="w-full h-5 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
                        <div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
                    }
                    
                </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default StakingController