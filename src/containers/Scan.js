import React, { useCallback, useContext, useEffect, useState } from 'react';
import Scanner from '../components/Scanner/Scanner';
import { ActionsContext } from '../contexts/context';

const Scan = () => {
    const [message, setMessage] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const { actions, setActions} = useContext(ActionsContext);

    const scan = useCallback(async() => {

        if ('NDEFReader' in window) { 
            try {
                const ndef = new window.NDEFReader();
                await ndef.scan();
                
                console.log("Scan started successfully.");
                ndef.onreadingerror = () => {
                    console.log("Cannot read data from the NFC tag. Try another one?");
                };
                
                ndef.onreading = event => {
                    console.log("NDEF message read.");
                    onReading(event);
                    setActions({
                        scan: 'scanned',
                        write: null
                    });
                };

            } catch(error){
                console.log(`Error! Scan failed to start: ${error}.`);
            };
        }
    },[setActions]);

    const onReading = ({message, serialNumber}) => {
        setSerialNumber(serialNumber);
        for (const record of message.records) {
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

    useEffect(() => {
        scan();
    }, [scan]);

    return(
        <>
            {actions.scan === 'scanned' ?  
            <div>
                <p>Serial Number: {serialNumber}</p>
                <p>Message: {message}</p>
            </div>
            : <Scanner status={actions.scan}></Scanner> }
        </>
    );
};

export default Scan;