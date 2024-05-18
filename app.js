const axios = require('axios');
const prompt = require('prompt-sync')();

const get_video_url = async (streamable) => {
    try {
        return (await axios.get(`https://api.streamable.com/videos/${streamable}`)).data.files.mp4.url;
    } catch (error) {
        return error.message;
    };
}

const prompt_console = async () => {
    console.log(await get_video_url(prompt('Enter Streamable Video ID: ')));
    prompt_console();
};

prompt_console();