import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.user.id)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.logout().then(() => {
            this.props.history.push("/")})
    }

    render() {
        if (!this.props.user) return null;
        return (
            <main className="Dashboard-main">
                <section className="dashboard-user-section">
                    <img className="dashboard-logo" src="https://www.brainscape.com/assets/bsc-share-icon.png" alt=""/>
                    <p>Hello, {this.props.user.first_name} {this.props.user.last_name}</p>
                    <div className="dashboard-dropdown">
                        <i className="fas fa-cog"></i>
                        <button className="dashboard-logout" onClick={this.handleSubmit}>Log out</button>
                    </div>
                </section>
                <div className="current-class">
                    Sample Class
                </div>
            </main>   
        )
    }
}

export default Dashboard;