import {useEffect, useState} from "react";
import Field from "./field"

const Item = (props) => {

    useEffect(() => {
        setTreeData(props.data)
    })

    const [treeData, setTreeData] = useState(props.data);

    const addItem = index => {
        console.log('addItem');
        const itemData = treeData[index];
        const newChilds = [
            {
                no: null,
                uperNo: itemData.no,
                text: "",
                level: itemData.level + 1,
                childs: []
            },
            ...itemData.childs
        ]

        console.log(newChilds);
        setTreeData([
            ...treeData
        ])
        //
        // setData({
        //     ...data,
        //     childs: newChilds
        // })
    }

    return (
        <div className="tree_box">
            {treeData.map((data, index) => (
                <div key={index} className="tree_item">
                    <Field data={data} addItem={addItem(index)} />
                    {data.childs.length > 0 && <Item data={data.childs} />}
                </div>
            ))}
        </div>
    )
}

export default Item