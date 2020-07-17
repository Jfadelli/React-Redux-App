import React from 'react'
import { connect } from 'react-redux'
import { apiCall } from '../store/actions'

const Snapshot = props => {
    return (
        <div>

            {props.isLoading &&
                <h4>Loading...</h4>
            }
            {props.snapshot &&
                <img src={props.snapshot} alt='snapshot' />
            }
            {props.error &&
                <h4>There was a problem</h4>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        snapshot: state.snapshot
    }
}
export default connect(mapStateToProps, { apiCall })(Snapshot)