import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Card, CardBody, CardHeader, CardFooter } from "react-simple-card";
import axios from 'axios';
import { stringify } from 'querystring';
import Img from 'react-image';
import GuideModal from './GuideModal';
import GuideCardCss from '../css/GuideCard.css'
import previewImage from '../../../img/preview.jpg';
import downloadImage from '../../../img/download.jpg';

class GuideCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            preview: "",
        }
    }

    download = (kindCompanyId, guideNo, guideFileNo, jsonTitle) => {
        console.log(jsonTitle);
        axios({
            url: 'http://localhost:8080/file/download',
            params: {
                guideId: kindCompanyId,
                guideNo: guideNo,
                no: guideFileNo
            },
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {

            console.log(response.headers);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', jsonTitle);
            document.body.appendChild(link);
            link.click();
        });

    }
    
    modalClose=()=>{
        this.setState({
            ...this.state,
            isOpen:false
        })
    }

    render() {
        let screen = null;
        
        
        if (this.props.guideData != null) {
            screen =
                <table className="col-12 guide-section" style={{ height: window.innerHeight}}>
                    {this.props.guideData.map((json) =>
                        <div className="guide-card">
                            <Card >
                                <CardHeader><b style={{ margin: 'auto' }}>{json.guideNo}. {json.guideTitle}</b></CardHeader>
                                {json.guideContents.map((contentJson) => (contentJson.no != 0) ? <CardBody><font className="guide-font">{contentJson.no}. {contentJson.content}</font><br /></CardBody> : null)}
                                {json.guideFiles.map((fileJson) => (fileJson.no != 0) ? <CardFooter><font className="guide-font"> - {fileJson.title}</font><img className="guide-img" src={previewImage} onClick={() => this.setState({ isOpen: true, preview: fileJson.preview })} /><img className="guide-img" onClick={() => this.download(json.kind_company_id, json.guideNo, fileJson.no, fileJson.title)} src={downloadImage} /><br /></CardFooter> : null)}
                            </Card>
                        </div>
                    )}
                    {(this.props.tip.length != 0) ?
                        <div className="guide-card">
                            <Card >
                                <CardHeader><b style={{ margin: 'auto' }}>꿀팁</b></CardHeader>
                                {this.props.tip.map((json) => <CardBody>{json.no}. {json.content}</CardBody>)}
                            </Card>
                        </div> : null}

                </table>
        }
        
        return (
            <div className="form-group row sc--table-row">
                <div className="col-9 sc--table-col">
                    <div className="row">
                        <div>{screen}</div>
                        <div className="col-12 form-inline">
                            {this.state.isOpen && (
                                <GuideModal preview={this.state.preview} modalClose={this.modalClose}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuideCard;