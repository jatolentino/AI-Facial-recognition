import React from "react";
import { sha1 } from 'js-sha1';
import {
    Button,
    Container,
    Form,
    Segment,
    Divider,
    Message,
    Progress,
    Loader,
    Image,
    Dimmer
} from "semantic-ui-react";
import axios from "axios";
import { authAxios } from "../../utils";
import { facialRecognitionURL } from "../../constants";
import FaceIMG from "../../assets/images/face.png";
import ShortParagraphIMG from "../../assets/images/short_paragraph.png";
import Shell from "./Shell";
    
import {
    CLOUDINARY_API_KEY, 
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME
} from "../../constants";

class Studio extends React.Component {
    state = {
        fileName: "",
        file: null,
        error: null,
        loading: false,
        statusCode: null,
        progress: 0,
        spinner: false,
        data: null
    };
    constructor(){
        super()
        this.deleteCloudinaryImage = this.deleteCloudinaryImage.bind(this);
    }

    //  DELETE THE IMAGE FILE RESULT ON CLOUDINARY AFTER 5 seconds
    // THE IMAGE URL WILL BE STILL ALIVE FOR 10 MINUTES ACCORDING TO CLOUDINARY DOC
    deleteCloudinaryImage = () => {
        // Extracting the publicId from the image url:
        const theLink = this.state.data.cloudinary_path
        const publicId = theLink.substring(theLink.lastIndexOf('/')+1).substring(0,theLink.substring(theLink.lastIndexOf('/')+1).lastIndexOf('.'))
        return new Promise((resolve) => {
            setTimeout(() => {
                const timestamp = new Date().getTime()
                const public_id = publicId
                const stringToHash = `public_id=${public_id}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`
                const signature = sha1(stringToHash)
                const theFormData = new FormData()
                theFormData.append("public_id",public_id)
                theFormData.append("signature",signature)
                theFormData.append("api_key",CLOUDINARY_API_KEY)
                theFormData.append("timestamp",timestamp)
                resolve(
                    axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/destroy`, theFormData)
                )
            }, 3000);
        });
    }

    handleFileChange = e => {
        if (e.target.files[0]) {
            const size = e.target.files[0].size;
            if (size > 5000000) {
                this.setState({ error: "Image size is greater than 5MB" });
            } else {
                this.setState({
                    fileName: e.target.files[0].name,
                    file: e.target.files[0],
                    error: null
                });
            }
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.file) {
            this.handleFileUpload(this.state.file);
        } else {
            this.setState({
                error: "No file selected"
            });
        }
    };

    

    handleFileUpload = async file => {
        const __studio_class = this;
        const formData = new FormData();
        formData.append("file", file);
        this.setState({ loading: true });
        const config = {
            onUploadProgress: function (progressEvent) {
                const progress = Math.round(
                    (100 * progressEvent.loaded) / progressEvent.total
                );
                __studio_class.setState({ progress });
                if (progress === 100) {
                    __studio_class.setState({
                        loading: false,
                        spinner: true
                    });
                }
            }
        };
        authAxios
            // authAxios
            .post(facialRecognitionURL, formData, config) //  facialRecognitionURL
            .then(async res => {
                this.setState({
                    data: res.data,
                    statusCode: res.status,
                    spinner: false
                });
                await this.deleteCloudinaryImage()
            })
            .catch(err => {
                //console.log("erro here")
                this.setState({
                    error: err.message,
                    loading: false,
                    spinner: false
                });
            });
    };


    render() {
        const { error, progress, loading, spinner, data } = this.state;
        return (
            <Shell>
                <Container style={{ padding: "1em" }}>
                    <Segment vertical>
                        <Divider horizontal>Facial Expression Recognition</Divider>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Choose a Picture:</label>
                                <Button as="label" htmlFor="file" type="button" style={{ "height": "42px", "padding": "0px", "backgroundColor": "black", }} >

                                    <Button.Content>
                                        <div style={{ "height": "42px", "display": "flex", "justifyContent": "center", "alignItems": "center", }} class="w-full text-white bg-black rounded-lg  focus:outline-none hover:text-gray-200 hover:bg-gray-700 inline-block " >
                                            <div class="flex flex-row">
                                                <div>
                                                    <svg className="fill-current hover:fill-gray-200 w-4 h-4 mr-2" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <span>Upload (Max 2MB)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Button.Content>
                                </Button>

                                <input
                                    id="file"
                                    type="file"
                                    hidden
                                    onChange={this.handleFileChange}
                                />
                                <div class="m-4"></div>
                                <Form.Input
                                    fluid
                                    label="Picture Chosen: "
                                    placeholder="Use the above bar to browse your file system"
                                    readOnly
                                    value={this.state.fileName}


                                >

                                </Form.Input>

                                <div className="space-x-5 mt-5">
                                    <button type="submit" className="bg-black font-bold hover:bg-gray-700 rounded-lg 
                                px-16 py-3 text-gray-100 hover:shadow-xl transition duration-150 ">Analyze</button>
                                    <a className="ui button" href={FaceIMG} download>
                                        <i aria-hidden="true" className="download icon" />
                                        Download test image
                                    </a>
                                </div>
                            </Form.Field>
                        </Form>
                        {error && (
                            <Message error header="There was an error" content={error} />
                        )}
                    </Segment>
                    <Segment vertical>
                        <Divider horizontal>Endpoint</Divider>
                        <p>
                            POST to {facialRecognitionURL} with headers: "Authentication":
                            "Token {"<your_token>"}"
                        </p>
                    </Segment>
                    <Segment vertical>
                        <Divider horizontal>JSON Response</Divider>
                        {loading && (
                            <Progress
                                style={{ marginTop: "20px" }}
                                percent={progress}
                                indicating
                                progress
                            >
                                File upload progress
                            </Progress>
                        )}
                    </Segment>
                    {spinner && (
                        <Segment>
                            <Dimmer active inverted>
                                <Loader inverted>Detecting Facial Expressions ......</Loader>
                            </Dimmer>
                            <Image src={ShortParagraphIMG} />
                        </Segment>
                    )}
                    {data && (
                        <div>
                            <div class="flex flex-col md:flex-row p-8 gap-20">

                                <div class="flex flex-col gap-2 w-full">
                                    <img src={JSON.parse(JSON.stringify(data.cloudinary_path))} />
                                    <div class="flex justify-center">
                                        <a href={JSON.parse(JSON.stringify(data.cloudinary_path))} target="_blank"><button class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" download>Download</button></a>
                                    </div>

                                </div>

                                <div class="flex flex-col w-full bg-gray-900 rounded-lg overflow-hidden">
                                    <div class="p-4">
                                        <div class="flex items-center justify-between">
                                            <span class="text-white font-bold text-sm ">JSON</span>

                                            <button id="copyButton" class="py-2 text-white bg-none rounded  focus:outline-none focus:ring hover:text-gray-200  inline-flex items-center">
                                                <svg className="fill-current hover:fill-gray-200 w-4 h-4 mr-2" viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>
                                                <span>Copy
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="px-4">
                                        <pre class="language-json">
                                            <code class="text-sm">{JSON.stringify(data, function replacer(key, value) {
                                                if (key === "cloudinary_path") {
                                                    return undefined
                                                }
                                                return value
                                            }, 2)}</code>
                                        </pre>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )}

                </Container>
            </Shell >
        );
    }
}

export default Studio;
