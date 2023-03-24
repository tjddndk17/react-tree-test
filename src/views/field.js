import {useEffect, useState} from "react";

const Field = (props) => {

    useEffect(() => {
        setData(props.data)
    })

    const [data, setData] = useState({
        no: null,
        uperNo: null,
        text: "",
        level: null,
    });

    const changeText = e => {
        setData({
            ...data,
            text: e.target.value
        })
    }

    return (
        <div className={'tree_field level-' + data.level}>
            <span>{data.no}</span>
            <input type="text" value={data.text} onChange={changeText} />
            {data.level <= 2 && <button type="button" onClick={props.addItem}>추가</button>}
        </div>
    )
}

export default Field