import React, { useCallback, useEffect } from 'react';

const Write = () => {

    const onWrite = useCallback(async() => {
        try {
            const ndef = new window.NDEFReader();
            await ndef.write({records: [{ recordType: "text", data: "18" }]});
            alert(`${18} saved!`);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        onWrite();
    }, [onWrite])

    return (
      "Write"
    );
};

export default Write;