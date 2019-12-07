import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        var date = new Date().getFullYear();
        return (
            <footer class="bg-dark text-white mt-5 p-4 text-center">
                Copyright &copy; {date} Dev Connector
  </footer>
        )
    }
}
