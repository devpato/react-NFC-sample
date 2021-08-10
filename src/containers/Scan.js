import React, { useEffect, useState } from 'react';
import Scanner from '../components/Scanner/Scanner';

const Scan = () => {
    const [isScanned, setiSScanned] = useState('Scanning...');
    const [message, setMessage] = useState('');
    const [serialNumber, setSerialNumber] = useState('');

    const scan = () => {
        if ('NDEFReader' in window) { 
            const ndef = new window.NDEFReader();
            
            ndef.scan().then(() => {
                console.log("Scan started successfully.");
                ndef.onreadingerror = () => {
                    console.log("Cannot read data from the NFC tag. Try another one?");
                };
                
                ndef.onreading = event => {
                    console.log("NDEF message read.");
                    onReading(event);
                    setiSScanned('Scanned');
                };
            }).catch(error => {
                console.log(`Error! Scan failed to start: ${error}.`);
            });
        }
    }

    const onReading = ({message, serialNumber}) => {
        setSerialNumber(serialNumber);
        for (const record of message.records) {
            console.log("Record type:  " + record.recordType);
            console.log("MIME type:    " + record.mediaType);
            console.log("Record id:    " + record.id);
            switch (record.recordType) {
                case "text":
                    const textDecoder = new TextDecoder(record.encoding);
                    setMessage(textDecoder.decode(record.data));
                    break;
                case "url":
                    // TODO: Read URL record with record data.
                    break;
                default:
                    // TODO: Handle other records with record data.
                }
        }
    };

    scan();
    return (
        <>
            <p>Serial Number: {serialNumber}</p>
            <p>Message: {message}</p>
            <Scanner scanned={isScanned}></Scanner>
        </>
    );
};

export default Scan;