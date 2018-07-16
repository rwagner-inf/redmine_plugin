import React from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'

const buttonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 9
}

const buttonStyle2 = {
    position: 'fixed',
    bottom: '30px',
    right: '78px',
    zIndex: 9
}

const FloatMenu = ({saveFunction, history}) => (
    <div>
        <Tooltip title="Save">
            <Button style={buttonStyle} type="primary" icon="save" onClick={saveFunction} size="large" shape="circle" />
        </Tooltip>
        <Tooltip title="Cancel">
            <Button style={buttonStyle2} type="primary" ghost icon="close" onClick={() => history.goBack()} size="large" shape="circle" />
        </Tooltip>
    </div> 
)

FloatMenu.propTypes = {
    saveFunction: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default FloatMenu