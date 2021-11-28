import InputItem from './InputItem'

const StakingInputCard = ({
    stakeTokens,
    unstakeTokens,
}) => {
    return (
        <div>
            <InputItem 
            stakeTokens={stakeTokens}
            unstakeTokens={unstakeTokens}
            />
        </div>
    )
}

export default StakingInputCard