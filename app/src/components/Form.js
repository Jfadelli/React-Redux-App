import React from 'react'
import { connect } from 'react-redux'
import { newRequest, apiCall } from '../store/actions'

const Form = (props) => {
    const handleChange = (e) => {
        e.preventDefault()
        props.newRequest(e.target.value)
    }

    return (
        <form onSubmit={props.apiCall(props.getUrl)}>

            <input
                type='url'
                name='getUrl'
                placeholder='URL'
                required
                onChange={handleChange}
            />
            <button>
                Click me!
            </button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        getUrl: state.getUrl
    }
}
export default connect(mapStateToProps, { newRequest, apiCall })(Form)