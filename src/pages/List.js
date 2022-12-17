import { useEffect, useState } from "react"
import { BASE_URL } from '../constants'
import axios from "axios"
import './List.css'

function List() {

    const [list, setList] = useState([])

    useEffect(() => {
        handleApi()
    })

    const handleApi = () => {
        const apiUrl = `${BASE_URL}/api/get-categories`
        axios.get(apiUrl)
            .then(res => {
                if (res.data.data) {
                    setList(res.data.data)
                }
            })
            .catch(err => {
                console.log(err, "err")
            })
    }


    return (
        <div className="category-card">
            {
                list && list.length > 0 &&
                list.map((item, index) => {
                    return (
                        <div className="catgeory-items">
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List
