import React  from 'react'
import BasicModal from '../components/modals/basic-modal'
import StaticBackdrop from '../components/modals/static-backdrop'
import WithoutAnimation from '../components/modals/without-animation'
import VerticallyCenteredModal from '../components/modals/vertically-centered'

function DashBoard() {
    return (
        <div className='app'>
            <div className='modal-wrap'>
                <h1>Modals</h1>
                <br />
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <BasicModal />
                    <StaticBackdrop />
                    <WithoutAnimation/>
                    <VerticallyCenteredModal/>
                </div>

            </div>
        </div>
    )
}

export default DashBoard