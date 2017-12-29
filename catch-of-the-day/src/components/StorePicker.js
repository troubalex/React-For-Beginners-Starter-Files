import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {


    goToStore(event) {
        event.preventDefault();
        // grab text from box
        const storeId = this.storeInput.value;
        // change URL
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
                <button type="submit">Visit store >></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;