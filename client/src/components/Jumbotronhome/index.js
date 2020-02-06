import React from 'react';
import Navbar from '../NavBar'

const Jumbotronhome = () => {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid text-center" id='homejumbo'>
                    <Navbar />
                    <div id="jumbotext">
                    <h1 class="display-4">BIG pick ups, quickly.</h1>
                    <p>Fridges, washers, dryers, dishwashers, etc. Peer to peer pick up and delivery service.</p>
                    </div>
            </div>
        </div>
    )
}
export default Jumbotronhome;