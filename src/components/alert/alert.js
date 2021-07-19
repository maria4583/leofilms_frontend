import PropTypes from 'prop-types'
import styles from './alert.module.css'

const types = {
    error: {
        icon: 'Error Icon',
        className: 'error'
    },
    warning: {
        icon: 'Warning Icon',
        className: 'warning'
    },
    success: {
        icon: 'Success Icon',
        className: 'success'
    }
}

const Alert = props => {
    return (
        <div className={styles.alert}>
            <img src="" alt=""/>
            <p></p>
        </div>
    )
}

export default Alert