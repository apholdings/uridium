import StakingController from "../../components/staking/StakingController"
import Layout from "../../hocs/Layout"
import { connect } from "react-redux"

const Staking = ({
    account,
    tether,
    tether_balance,
    uridium,
    uridium_balance,
    decentralBank,
    stakingBalance,
    loading_success
}) => {

    const stakeTokens = (amount) => {
        //set loading true
        //funcion de aprove
        tether.methods.approve(decentralBank._address, amount).send({from: account }).on('transactionHash', (hash) => {
            // depositTokens
            decentralBank.methods.depositTokens(amount).send({from: account}).on('transactionHash', (hash) => {
                //set loading false
            })
        })
    }

    const unstakeTokens = () => {
        //set loading true
        decentralBank.methods.unstakeTokens().send({from: account}).on('transactionHash', (hash) => {
            //set loading false
        })
    }

    return(
        <Layout>
            <StakingController
                loading_success={loading_success}
                tetherBalance={tether_balance}
                uridiumBalance={uridium_balance}
                stakingBalance={stakingBalance}
                decentralBank={decentralBank}
                stakeTokens={stakeTokens}
                unstakeTokens={unstakeTokens}
            />
        </Layout>
    )
}

const mapStateToProps = state => ({
    account: state.wallet.account,
    tether: state.wallet.tether,
    tether_balance: state.wallet.tether_balance,
    uridium: state.wallet.uridium,
    uridium_balance: state.wallet.uridium_balance,
    decentralBank: state.wallet.decentralBank,
    stakingBalance: state.wallet.stakingBalance,
    loading_success: state.wallet.loading_success,
  })
  
  export default connect(mapStateToProps, {}) (Staking)