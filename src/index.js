import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class Header extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <header className={styles.test}>
        <h1>{text}</h1>
      </header>
    )
  }
}
