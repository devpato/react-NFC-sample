import React from 'react';

const Write = () => {

    const onWrite = async() => {
        const abortController = new AbortController();
        abortController.signal.onabort = event => {
            alert('STOP');
        };
        try {
            const ndef = new window.NDEFReader();
            await ndef.write(
                {
                    records: [{ recordType: "text", data: "17" }]
                },
                {signal: abortController.signal}
            );
            alert(`${16} saved!`);
            abortController.abort();
        } catch (error) {
            console.log(error);
            abortController.abort();
        }
    };

    onWrite();
    return (
      "Write"
    );
};

export default Write;