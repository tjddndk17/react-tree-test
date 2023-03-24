import React, {useEffect, useState} from 'react'
import dataJson from './data.json'
import Item from "./Item";

const Tree = () => {

    useEffect(() => {
        setList(dataJson.data);
    }, [])

    const [list, setList] = useState([]);

    return (
        <div className="wrap">
            <h1>Tree LIST</h1>
            <Item data={list} />
        </div>
    )
}

export default Tree