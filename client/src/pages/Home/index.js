import React from 'react';
import Jumbotronhome from '../../components/Jumbotronhome';
import Gettingstarted from '../../components/Gettingstarted';
import Truckhome from '../../components/Truckhome';
import Reviews from '../../components/Reviews';
import Footer from '../../components/Footer';
import ClipLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



class SpinnerComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }
   
    render() {
        
      return (
        
        <div className="sweet-loading">
           <Jumbotronhome />
            <Gettingstarted />
            <Truckhome />
            <Reviews />
            <Footer />
          <ClipLoader
            size={20}
            css={override}
            //size={"150px"} this also works
            color={"#248232"}
            loading={this.state.loading}
          />
           

        </div>

      );
    }
  }
export default SpinnerComponent;