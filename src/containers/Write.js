import React from 'react';
import Writer from '../components/Writer/Writer';

const Write = () => {
    const onWrite = async(message) => {
        console.log('write', message);
        try {
            const ndef = new window.NDEFReader();
            await ndef.write({records: [{ recordType: "text", data: "Hello World!" }]});
            alert(`Value Saved!`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <Writer writeFn={onWrite}/>
    );
};

export default Write;