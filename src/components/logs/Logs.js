import React, { useState, useEffect } from 'react'

const Logs = () => {
    const [ logs, setLogs ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        getLogs()

        //eslint-disable-next-line
    }, [])

    const getLogs = async () => {
        setLoading(true);
        // fetch returns a promise
        const res = await fetch('/logs')
        const data = await res.json() // give me the data

        setLogs(data)
        setLoading(false)

    }

    if(loading) {
        return <h4>Loading...</h4>
    }

    return (
        <ul className='collection-with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className='center'>No logs to show....</p>) : (logs.map(log => <li>{log.message}</li>))}
        </ul>
    )
}

export default Logs
