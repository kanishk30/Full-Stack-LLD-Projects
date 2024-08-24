import React from 'react'

const withLoading = (WrappedComponent) => {
    // WrappedComponent = <DataComponent>
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: true
            }
        }

        componentDidMount() {
            // api call... 
            // simulate delay.
            setTimeout(() => {
                this.setState({
                    isLoading: false
                })
            }, 3000)
        }

        render() {
            if (this.state.isLoading) {
                return <h1>Loading.... Please wait</h1>
            }

            return <WrappedComponent {...this.props} company='Scaler' />
        }

    }
}

export default withLoading