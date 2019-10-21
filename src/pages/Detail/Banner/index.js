
import { Carousel, WingBlank } from 'antd-mobile';
import React from "react";
import { Banner_Style } from "./styled"
import { connect } from 'react-redux';
import {Banner_Index} from "@actions/Detail"


class Banner extends React.Component {
    constructor() {
        super()
        this.state = {
            imgHeight: '1rem',
            slideIndex:0
        }
    }

    componentDidMount() {
       
        // simulate img loading
       
    }
    render() {
        let { val } = this.props
       
        return (
            <Banner_Style>
                <WingBlank style={{ height:'1.8rem' }}>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        autoplay={false}
                        afterChange={index => {
                            this.setState({ slideIndex: index },()=>{
                                this.props.HandlerClickValue(this.state.slideIndex )
                                })
                            }
                        }
                    >
                        {val.map((val, index) => {
                            return <img
                                src={val.img}
                                alt=""
                                key={val}
                                style={{
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    height: 'auto',
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                    verticalAlign: 'top',
                                    display: 'block',
                                    width: this.state.imgHeight,
                                }}
                               
                            />
                        })}
                    </Carousel>
                </WingBlank>
            </Banner_Style>
        );
    }
    
}
const mapStateToProps=()=>({

})
const mapDispacthToProps=(dispatch)=>({
    HandlerClickValue(index){
        dispatch(Banner_Index(index))
    }
})
export default connect(mapStateToProps, mapDispacthToProps)(Banner)