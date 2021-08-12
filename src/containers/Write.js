import React, { useCallback, useEffect } from 'react';

const Write = () => {
    const onWrite = useCallback(async() => {
        try {
            const ndef = new window.NDEFReader();
            await ndef.write({records: [{ recordType: "text", data: "Hello World!" }]});
            alert(`Value Saved!`);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        onWrite();
    }, [onWrite])

    return (
      <></>
    );
};

export default Write;